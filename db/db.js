// db.js
const { endpoints } = require("./../endpoints");

let response = {};
endpoints.forEach((endpoint) => {
  response[endpoint.responseKey] = endpoint.responseData || {};
});

// Should export a function which return an object
module.exports = () => response;
