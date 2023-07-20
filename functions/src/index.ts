import * as functions from "firebase-functions";
import next from "next";

const server = next({
  dev: false,
  conf: { distDir: ".next" },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = functions.https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
