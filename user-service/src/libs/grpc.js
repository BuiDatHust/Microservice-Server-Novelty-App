const grpc = require('@grpc/grpc-js')
const protoloader = require('@grpc/proto-loader')
const path = require('path')
const fs = require('fs')

const GRPC_SONG_CLIENT = 'grpc_song_client'

const getAllFilenameOfDir = (directoryLink)=>{
    const directoryPath = path.join(__dirname, directoryLink);
    return fs.readdirSync(directoryPath).filter(filename => filename.slice(-6)==='.proto');
}

const getService = (protoFile, serviceName) => {
    const options = {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    };

    const packageDefinition = protoloader.loadSync(protoFile, options);
    const service = grpc.loadPackageDefinition(packageDefinition)[serviceName];
    return service
}

const getClient = (clientName, serviceName) => {
    let service;
    let client;

    switch(clientName){
        case GRPC_SONG_CLIENT:
            service = getService('../configs/grpc/protos/client', serviceName)
            client = new service(`${host}:${port}`,grpc.credentials.createInsecure())
        default:
            client = {}
    }

    return client
}

const unaryCall = (call,callback
  ) =>  {
    if (call.request) {
      console.log(`(server) Got client message: ${call.request.clientMessage}`);
    }
    callback(null, {
      serverMessage: 'Message from server',
    });
  };

const serverStreamingCall = (call) => {
    call.write({
        serverMessage: 'Message from server',
    });
}

const clientStreamingCall = (call) => {
    call.on('data', (clientMessage) => {
        console.log(
        `(server) Got client message: ${clientMessage.clientMessage}`
        );
    });
}

const bidirectionalStreamingCall = ( call)=> {
    call.write({
        serverMessage: 'Message from server',
    });
    call.on('data', () => {
        console.log(
        `(server) Got client message: ${clientMessage.clientMessage}`
        );
    });
};

module.exports = {
    getAllFilenameOfDir,
    unaryCall,
    serverStreamingCall,
    clientStreamingCall,
    bidirectionalStreamingCall,
    getClient
}