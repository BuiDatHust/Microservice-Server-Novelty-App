const { sendError } = require("../libs/response");

const BODY_FIELD = "body";
const QUERY_FIELD = "query";
const PARAM_FIELD = "param";

const dtoValidationMiddleware = (schema, part) => {
  return async (req, res, next) => {
    const data = req[part];
    try {
      const value = await schema.validateAsync(data);
      req[part] = value;
      next();
    } catch (error) {
        console.log(error)
        sendError(res, 400, error.details.map(e => e.message));
    }
  };
};

module.exports = {
  BODY_FIELD,
  QUERY_FIELD,
  PARAM_FIELD,
  dtoValidationMiddleware,
};
