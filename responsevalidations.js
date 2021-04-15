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
    ? validationResponseData(request, endpointConfig.responseData)
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

/**
 * @method validationResponseData
 * Validate response data with URLS for modifications over response data
 * @param {Object} request receives request data
 * @param {Object} responseData receives response data
 * @returns {Object}
 */
const validationResponseData = (request, responseData) => {
  if (request.url === '/site_permissions' && request.method === 'PUT') {
    if (request.body.users) {
      const newUser = request.body.users[0];
      responseData.users.push({
        userId: 20,
        isEditable: true, 
        ...newUser,
      });
    }    
  }
  return responseData;
};

module.exports = { getRequestData, saveRequestData };
