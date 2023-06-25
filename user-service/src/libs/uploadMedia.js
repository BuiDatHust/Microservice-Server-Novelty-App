const Minio = require('minio')
const configs = require('../configs/config')
const crypto = require('crypto')
const HttpException = require('../exceptions/httpException')

const minioClient = new Minio.Client(configs.minio.client)

const uploadImage = async (file, bucketName = configs.minio.bucketName) => {
  if (!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
    throw new HttpException('File type not supported', 400)
  }
  const timestamp = Date.now().toString()
  const hashedFileName = crypto
    .createHash('md5')
    .update(timestamp)
    .digest('hex')
  const extension = file.originalname.substring(
    file.originalname.lastIndexOf('.'),
    file.originalname.length
  )
  const metaData = {
    'Content-Type': file.mimetype,
  }

  const fileName = hashedFileName + extension

  minioClient.putObject(
    bucketName,
    fileName,
    file.buffer,
    metaData,
    function (err, res) {
      if (err) {
        console.log(err)
        throw new HttpException('Error uploading file', 400)
      }
    }
  )

  const { endPoint, port } = configs.minio.client
  return {
    url: `${endPoint}:${port}/${bucketName}/${fileName}`,
  }
}

const deleteMedia = async (objetName) => {
  minioClient.removeObject(bucketName, objetName, function (err, res) {
    if (err) throw new HttpException('An error occured when deleting!', 400)
  })
}

module.exports = {
  uploadImage,
  deleteMedia,
  minioClient,
}
