//const { root, text, html } = require("./controller");
import { root, text, html } from "./controller";
//const { log, checkSize } = require("./middlewares");
import { log, checkSize } from "./middlewares";

const router = (app) => {
  app.get("/", log, root);

  app.get("/text", log, text);
  app.get("/text/:param", log, checkSize, text);

  app.get("/html", log, html);
  app.get("/html/:param", log, checkSize, html);
};

//module.exports = router;
//export default { root, text, html };
export default router;
