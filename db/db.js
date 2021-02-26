// db.js

const sitesList = require("./sites-service/sitesList");

const user_settings = require("./users-service/user-settings");

// Should export a function which return an object

module.exports = () => ({
  sites: sitesList,
  user_settings,
});
