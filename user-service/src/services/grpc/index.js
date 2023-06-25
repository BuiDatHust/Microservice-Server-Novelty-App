const { sample1Service } = require("./sample1")
const { sample2Service } = require("./sample2")

const addServices = (server, grpcObjects) => {
    server.addService(grpcObjects.sample1.Sample1Service.service, sample1Service)
    server.addService(grpcObjects.sample2.Sample2Service.service, sample2Service)
}

module.exports = {
    addServices
}