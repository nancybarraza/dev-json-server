module.exports = {
  siteId: 1,
  siteName: "Tony Test",

  siteModel: {
    siteModelId: 1,
    name: "Ignition",
  },

  totalSystemOutput: 1,
  lastDataReceived: 1617256800000,
  siteStatus: {
    value: "5",
    symbolName: "OK",
  },
  commStatus: {
    value: "3",
    symbolName: "Disconnected",
  },

  powerGrid: {
    gridCurrentPowerFlow: 1,
    gridStatus: {
      value: "5",
      symbolName: "OK",
    },
  },
  microGrid: {
    isConnected: true,
  },

  microGridConsumption: [
    {
      deviceGroupId: 7,
      name: "EV",
      description: "EV",
      deviceGroupStatusId: 1,
      totalLoad: 12.6,
      gridCurrentPowerFlow: 6.4,
      dcCurrentPowerFlow: 6.2,
      inverter: {
        cumulativePowerRating: 500,
      },
    },
    {
      deviceGroupId: 6,
      name: "ACLOAD",
      description: "Load / AC",
      deviceGroupStatusId: 1,
      totalLoad: 12.6,
      gridCurrentPowerFlow: null,
      dcCurrentPowerFlow: null,
      inverter: {
        cumulativePowerRating: 500,
      },
    },
    {
      deviceGroupId: 9,
      name: "CDEMAND",
      description: "Customer Demand",
      deviceGroupStatusId: 1,
      totalLoad: 12.6,
      gridCurrentPowerFlow: 6.4,
      dcCurrentPowerFlow: 6.2,
      inverter: {
        cumulativePowerRating: 500,
      },
    },
  ],
  microGridProductionAssets: [
    {
      deviceGroupId: 2,
      name: "PDC",
      description: "Solar",
      deviceGroupStatusId: 1,
      gridCurrentPowerFlow: 12.6,
      maxPowerRating: 20,
      currentCapacity: null,
      inverter: {
        cumulativePowerRating: 500,
      },
    },
    {
      deviceGroupId: 3,
      name: "WIND",
      description: "Wind",
      deviceGroupStatusId: 1,
      gridCurrentPowerFlow: 12.6,
      maxPowerRating: 20,
      currentCapacity: null,
      inverter: {
        cumulativePowerRating: 500,
      },
    },
    {
      deviceGroupId: 1,
      name: "BATT",
      description: "Battery",
      deviceGroupStatusId: 1,
      gridCurrentPowerFlow: 12.6,
      maxPowerRating: 20,
      inverter: {
        cumulativePowerRating: 500,
      },
      currentCapacityPercent: 63,
    },
    {
      deviceGroupId: 4,
      name: "RENGINE",
      description: "R. Engine",
      deviceGroupStatusId: 1,
      gridCurrentPowerFlow: 12.6,
      maxPowerRating: 20,
      inverter: {
        cumulativePowerRating: 500,
      },
      currentCapacityPercent: null,
    },
  ],
};
