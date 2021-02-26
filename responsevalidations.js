const { endpoints } = require("./endpoints");
/**
 * validateUrl
 * Validate url name to return data mock
 * @param {string} url receives url from request
 */
const validateUrl = (url) => {
  const endpointConfig = endpoints.find(
    (endpoint) => "/" + endpoint.responseKey === url
  );

  return endpointConfig && endpointConfig.responseData
    ? endpointConfig.responseData
    : {};
};

module.exports = validateUrl;
