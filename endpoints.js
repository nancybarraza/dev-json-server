// This file contains endpoint configuration for json-server

const user_Settings = require("./db/users-service/user-settings");

const sitesList = require("./db/sites-service/sitesList");

const charts_facility = require("./db/charts-service/facility-usage-production");
const charts_energy = require("./db/charts-service/energy-production");
const charts_ess = require("./db/charts-service/ess-states");
const charts_vehicle = require("./db/charts-service/vehicle-and-fleet");

const endpoints = [
  {
    endpoint: "/users-service/user/settings",
    responseKey: "user_settings",
    responseData: user_Settings,
  },
  {
    endpoint: "/sites-service/sites/",
    responseKey: "sites",
    responseData: sitesList,
  },
  {
    endpoint: "/sites-service/sites/:siteId",
    responseKey: "sites_detail",
  },
  {
    endpoint: "/sites-service/sites/:siteId/events",
    responseKey: "sites_events",
  },
  {
    endpoint: "/sites-service/sites/:siteId/telemetry",
    responseKey: "sites_telemetry",
  },
  {
    endpoint: "/sites-service/sites/:siteId/audit-log",
    responseKey: "sites_auditlog",
  },
  {
    endpoint: "/notifications-service/notifications/",
    responseKey: "notifications",
  },
  {
    endpoint: "/notifications-service/notifications/dismiss/",
    responseKey: "notifications_dismiss",
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
];

module.exports = {
  endpoints,
};
