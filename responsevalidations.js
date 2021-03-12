const { endpoints } = require("./endpoints");

/**
 * saveRequestData
 * Validate url name to return data mock
 * @param {string} url receives url from request
 */
const saveRequestData = (request) => {
  const endpointConfig = endpoints.find(
    (endpoint) => "/" + endpoint.responseKey === request.url
  );

  return endpointConfig && endpointConfig.responseData
    ? endpointConfig.responseData
    : {};
};

/**
 * getRequestMockData
 * Validate original url for special scenarios
 * @param {string} url receives url from request
 */
const getRequestData = (request) => {
  return getSpecialData(request._parsedOriginalUrl.path);
};

const getSpecialData = (originalUrl) => {
  const endpointConfig = endpoints.find(
    (endpoint) =>
      !!endpoint.regexpOriginalUrl &&
      originalUrl.match(endpoint.regexpOriginalUrl)
  );

  return endpointConfig && endpointConfig.getSpecialData
    ? endpointConfig.getSpecialData(
        originalUrl,
        endpointConfig.regexpOriginalUrl,
        endpointConfig.responseData
      )
    : undefined;
};

module.exports = { getRequestData, saveRequestData };
