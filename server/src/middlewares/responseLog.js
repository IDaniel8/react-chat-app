import { response } from "express";
import { loggerResponseMessage } from "../utils/loggerMessage";

const levels = {
  "4xx": "warn",
  "2xx": "info",
  "5xx": "debug",
};

function responseLogMiddleware(req, res, next) {
  const defaultWrite = res.write;
  const defaultEnd = res.end;
  const chunks = [];

  res.write = (...restArgs) => {
    chunks.push(Buffer.from(restArgs[0]));
    defaultWrite.apply(res, restArgs);
  };

  res.end = (...restArgs) => {
    if (restArgs[0]) {
      chunks.push(Buffer.from(restArgs[0]));
    }
    const body = Buffer.concat(chunks).toString("utf8");
    const logData = { ...req, statusCode: res.statusCode, body };

    loggerResponseMessage(
      logData,
      levels[String(logData.statusCode).replace(/(?<=\d).*/g, "x")]
    );
    defaultEnd.apply(res, restArgs);
  };

  next();
}

export default responseLogMiddleware;
