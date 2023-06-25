const grpc = require('@grpc/grpc-js')
const protoloader = require('@grpc/proto-loader')
const path = require('path')
const { getAllFilenameOfDir } = require('../libs/grpc')
const configs = require('../configs/config')
const { addServices } = require('../services/grpc')

const protoLink = '../configs/grpc/protos/server'

const startGrpcServer = () => {
  const { host, port } = configs.grpc.server
  const server = new grpc.Server()

  const files = getAllFilenameOfDir(protoLink)
  const protoPaths = files.map((filename) => {
    return path.resolve(__dirname, `${protoLink}/${filename}`)
  })
  const packageDefinitions = protoloader.loadSync(protoPaths, {
    keepCase: true,
  })
  const grpcObjects = grpc.loadPackageDefinition(packageDefinitions)
  addServices(server, grpcObjects)

  server.bindAsync(
    `${host}:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        throw new Error(error.message)
      }

      console.log(`grpc server running at ${host}:${port}`)
      server.start()
    }
  )
}

module.exports = {
  startGrpcServer,
}
