// Custom Logger Middleware
// Logs the HTTP Method, URL, and Timestamp of every incoming request

const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware / route handler
};

module.exports = logger;
