import logger from "node-color-log";

function loggerResponseMessage(res, method) {
  logger[method](
    `HTTP method: ${res.method}, url: ${res.url}, statusCode: ${res.statusCode}, body: ${res.body}`
  );
}

export { loggerResponseMessage };
