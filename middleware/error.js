//const ErrorResponse = require("../utils/errorResponse");

// const errorHandler = (err, req, res, next) => {
//   let error = { ...err };

//   error.message = err.message;

//   if (err.code === 11000) {
//     const message = `Duplicate Field value entered`;
//     error = new ErrorResponse(message, 400);
//   }

//   if (err.name === "ValidationError") {
//     const message = Object.values(err.errors).map((val) => val.message);
//     error = new ErrorResponse(message, 400);
//   }

//   console.log(error.message);

//   res.status(error.statusCode || 500).json({
//     success: false,
//     error: error.message || "Server Error",
//   });
// };

// module.exports = errorHandler;


const errorMiddlewareHandler = (err, req, res, next) => {
  //Set your status code
  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //set status code
  res.status(errorStatusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorMiddlewareHandler};