const { ValidationError } = require("sequelize");
const { getConsoleLogger } = require("./consoleLogger");
const { FailValidation } = require("./errors");

const errorLogger = getConsoleLogger('errorLogging');
const socketOutboundLogger = getConsoleLogger('inboundLogging');
errorLogger.addContext('requestType', 'HttpLogging');
socketOutboundLogger.addContext('requestType', 'SocketLogging');

const sendSuccess = (res, data, message) => {
  res.status(200).json({ message, data });
};

const sendError = (res, code, error, errorSubject) => {
  if (errorSubject) errorLogger.error(errorSubject);
  if (errorSubject instanceof ValidationError) {
    return res.status(422).json({ error: FailValidation((errorSubject.errors)) });
  };
  res.status(code).json({ error });
};

module.exports = {sendError,sendSuccess}