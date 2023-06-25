const FailValidation = (errors) => {
  const messages= {};
  errors.forEach((error) => {
    const path = (error.original)?.path || error.path;
    const message = (error.original)?.message || error.message;
    messages[path] ||= [];
    messages[path].push(message);
  });
  return {
    code: 120,
    messages,
  };
};

const NoData = {
  code: 8,
  message: 'No data available',
};

const InternalError = {
  code: 131,
  message: 'Internal error',
};

const BadAuthentication = {
  code: 215,
  message: 'Bad authentication data',
};


module.exports = {
    FailValidation,
    NoData,
    InternalError,
    BadAuthentication
}