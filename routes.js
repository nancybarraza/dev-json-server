const routes = {
    '/users-service/user/settings': '/user_settings',
    '/sites-service/sites/': '/sites',
    '/sites-service/sites/:siteId': '/sites_detail',
    '/sites-service/sites/:siteId/events': '/sites_events',
    '/sites-service/sites/:siteId/telemetry': '/sites_telemetry',
    '/sites-service/sites/:siteId/audit-log': '/sites_auditlog',
    '/notifications-service/notifications/': '/notifications',
    '/notifications-service/notifications/dismiss/': '/notifications_dismiss',
    '/charts-service/energy-productions': '/charts_energy',
    '/charts-service/ess-states': '/charts_ess',
    '/charts-service/facility-usage-productions': '/charts_facility',
    '/charts-service/vehicle-and-fleets': '/charts_vehicle',
};

module.exports = routes;
