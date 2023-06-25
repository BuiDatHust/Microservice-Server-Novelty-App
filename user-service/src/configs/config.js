const dotenv = require('dotenv')
dotenv.config()

const configs = {
  sentryDsn: process.env.SENTRY_DSN,
  grpc: {
    client: {
      songService: {
        host: process.env.GRPC_SONG_SERVICE_HOST,
        port: process.env.GRPC_SONG_SERVICE_PORT,
      },
    },
    server: {
      host: process.env.GRPC_SERVER_HOST,
      port: process.env.GRPC_SERVER_PORT,
    },
  },
  minio: {
    client: {
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
      endPoint: process.env.MINIO_HOST,
      useSSL: false,
      port: +process.env.MINIO_PORT,
    },
    bucketName: process.env.MINIO_BUCKET_NAME
  },
}

module.exports = configs
