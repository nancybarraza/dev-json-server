// user-settings.js
module.exports = {
  userSettingId: 19,
  user: {
    userId: 20,
    oktaUserId: 50,
  },
  unitMeasurement: {
    unitMeasurementId: 2,
    name: "F°",
  },
  notificationPreferences: [
    {
      notificationPreferenceId: 1,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 1,
        name: "NEW WORK ITEM",
      },
      emailEnabled: true,
      smsEnabled: false,
    },
    {
      notificationPreferenceId: 2,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 2,
        name: "FAULTED",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
    {
      notificationPreferenceId: 3,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 3,
        name: "Maintenance Mode Initiated",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
    {
      notificationPreferenceId: 4,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 4,
        name: "Maintenance Mode Cleared",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
    {
      notificationPreferenceId: 5,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 5,
        name: "New Device at Site",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
    {
      notificationPreferenceId: 6,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 6,
        name: "Device Offline",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
    {
      notificationPreferenceId: 7,
      notificationPreferenceType: {
        notificationPreferenceTypeId: 7,
        name: "Device Removed From Site",
      },
      emailEnabled: true,
      smsEnabled: true,
    },
  ],
};
