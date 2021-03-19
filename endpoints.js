// This file contains endpoint configuration for json-server

// users-service
const user_Settings = require("./db/users-service/user-settings");
const okta_users = require("./db/users-service/users-okta");

// sites-service
const sitesList = require("./db/sites-service/sitesList");
const sitesIcianUsers = require("./db/sites-service/assigned-users");
const auditLogList = require("./db/sites-service/audit-log-list");
const siteEvents = require("./db/sites-service/site-events");
const siteInformation = require("./db/sites-service/site-information");
const siteBusBand = require("./db/sites-service/bus-band");
const site_permissions = require("./db/sites-service/site-permissions");

// notifications-service
const notificationsDismiss = require("./db/notifications-service/notification-dismiss");
const notifications = require("./db/notifications-service/notifications");

// charts-service
const charts_facility = require("./db/charts-service/facility-usage-production");
const charts_energy = require("./db/charts-service/energy-production");
const charts_ess = require("./db/charts-service/ess-states");
const share_reports = require("./db/charts-service/share-reports");

// device-service
const devicesList = require("./db/device-service/devices-list");
const deviceStatus = require("./db/device-service/device-status");

// This data is not being consumed/making http call to get data from SERVER.
// This is still working with internal mock data on DCentriQ APP files.
// I leave this here to be ready when http request has been integrated.
const charts_vehicle = require("./db/charts-service/vehicle-and-fleet");

const endpoints = [
  {
    endpoint: "/users-service/users/settings",
    responseKey: "user_settings",
    responseData: user_Settings,
  },
  {
    endpoint: "/users-service/users/okta/users",
    responseKey: "okta_users",
    responseData: okta_users,
  },
  {
    endpoint: "/sites-service/sites/",
    responseKey: "sites",
    responseData: sitesList,
  },
  {
    endpoint: "/sites-service/sites/?timestamp=:time",
    responseKey: "sites",
    responseData: sitesList,
  },
  {
    endpoint: "/sites-service/sites/assigned-user",
    responseKey: "sites_ician_users",
    responseData: sitesIcianUsers,
  },
  {
    endpoint: "/sites-service/sites/:siteId",
    responseKey: "sites_detail",
    responseData: siteInformation,
  },
  {
    endpoint: "/sites-service/sites/:siteId/events",
    responseKey: "sites_events",
    responseData: siteEvents,
  },
  {
    endpoint: "/sites-service/sites/:siteId/telemetry",
    responseKey: "sites_telemetry",
  },
  {
    endpoint: "/sites-service/sites/:siteId/audit-log",
    responseKey: "sites_auditlog",
    responseData: auditLogList,
  },
  {
    endpoint: "/sites-service/sites/:siteId/busband",
    responseKey: "bus_band",
    responseData: siteBusBand,
  },
  {
    endpoint: "/sites-service/sites/:siteId/permissions",
    responseKey: "site_permissions",
    responseData: site_permissions,
  },
  {
    endpoint: "/sites-service/sites/:siteId/permissions/:userId",
    responseKey: "site_permissions_delete",
    responseData: { status: '200 OK' },
  },
  {
    endpoint: "/notifications-service/notifications/",
    responseKey: "notifications",
    responseData: notifications,
  },
  {
    endpoint: "/notifications-service/notifications/dismiss/",
    responseKey: "notifications_dismiss",
    responseData: notificationsDismiss,
  },
  {
    endpoint: "/charts-service/charts/energy-productions",
    responseKey: "charts_energy",
    responseData: charts_energy,
  },
  {
    endpoint: "/charts-service/charts/ess-states",
    responseKey: "charts_ess",
    responseData: charts_ess,
  },
  {
    endpoint: "/charts-service/charts/facility-usage-productions",
    responseKey: "charts_facility",
    responseData: charts_facility,
  },
  {
    endpoint: "/charts-service/charts/vehicle-and-fleets",
    responseKey: "charts_vehicle",
    responseData: charts_vehicle,
  },
  {
    endpoint: "/charts-service/charts/share-reports",
    responseKey: "share_reports",
    responseData: share_reports,
  },
  {
    endpoint: "/devices-service/devices/:siteId",
    responseKey: "devicesList",
    responseData: devicesList,
  },
  {
    endpoint: "/devices-service/devices/:deviceId/status",
    responseKey: "deviceStatus",
    responseData: deviceStatus,
    regexpOriginalUrl: /\/devices-service\/devices\/([0-9]*)\/status/,
    getSpecialData: (originalUrl, regexpOriginalUrl, responseData) => {
      // Device Status
      const array = originalUrl.match(regexpOriginalUrl);
      const deviceId = array[1];

      // Get deviceId mod to alternate device Id status
      const deviceIdToReturn = deviceId % 2 ? 1 : 2;

      const deviceStatus = responseData.find(
        (value) => value.deviceId === deviceIdToReturn
      );

      return deviceStatus.status;
    },
  },
];

module.exports = {
  endpoints,
};
