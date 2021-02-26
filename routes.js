const { endpoints } = require("./endpoints");

let routes = {};

endpoints.forEach((endpoint) => {
  routes = {
    ...routes,
    [endpoint.endpoint]: "/" + endpoint.responseKey,
  };
});

module.exports = routes;
