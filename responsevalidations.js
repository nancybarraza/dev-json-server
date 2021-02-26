
const sitesList = require("./db/sites-service/sitesList");
const userSettings = require("./db/users-service/user-settings");
const chartsEnergy = require("./db/charts-service/energy-production");
/**
 * validateUrl
 * Validate url name to return data mock
 * @param {string} url receives url from request
 */
const validateUrl = (url) => {
    switch (url) {
        case '/user_settings':
            return user_settings;
        case '/sites':
            return sitesList;
        case '/charts_energy':
            return chartsEnergy;
        default:
            return {
                success: true,
                result: {},
              };
    }    
};

module.exports = validateUrl;