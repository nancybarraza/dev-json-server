const routes = require("./routes");
const jsonServer = require("json-server");
const { getRequestData, saveRequestData } = require("./responsevalidations");
const server = jsonServer.create();
const router = jsonServer.router(require("./db/db.js")());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  // validate if request method is POST, PUT, PATCH or DELETE and send direct status 200 success
  // if catch not it, this clean the mock data with "{}" over property request
  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE" ||
    req.method === "PATCH"
  ) {
    const response = saveRequestData(req);
    res.status(200).jsonp(response);
  } else {
    //

    const data = getRequestData(req);
    if (!!data) {
      res.status(200).jsonp(data);
      return;
    }

    next();
  }
});

server.use(router);

server.listen(port);
