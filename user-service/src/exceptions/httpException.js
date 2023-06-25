class HttpException extends Error {  
  constructor (message,code) {
    super(message)
    this.name = this.constructor.name
    this.code = code

    // capturing the stack trace keeps the reference to your error class
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = HttpException  