const pino = require("pino");

const buildProdLogger = () => {
  const prodLogger = pino("debug.log");
  prodLogger.level = "debug";

  return prodLogger;
};

const buildDevLogger = () => {
  const devLogger = pino();
  devLogger.level = "info";
  return devLogger;
};

let logger = null;

if (process.env.NODE_ENV === "production") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

module.exports = logger;
