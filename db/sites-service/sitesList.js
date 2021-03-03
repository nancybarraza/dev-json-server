// sitesList.js
module.exports = 
[
  {
    siteId: 1,
    externalId: "a0h3K000000Xlh4QAC",
    name: "Tony Test",
    plcId: "BADRIVER",
    icianName: "Todd Connor",
    externalIcianId: "todd.connor@faithtechnologies.com",
    address: {
      addressId: 1,
      latitude: "30.549935",
      longitude: "-87.28363069999999"
    },
    location: {
      locationId: 3,
      locationName: "Location Name",
      customer: {
        customerId: 8,
        companyName: "Company Name"
      }
    },
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "5",
        symbolName: "OK",
        active: false
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        value: "2",
        symbolName: "Island Mode",
        active: false
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "3",
        symbolName: "Disconnected",
        active: false
      }
    ]
  },
  {
    siteId: 2,
    externalId: "78251xxffSD666",
    name: "Lab 3",
    plcId: "LAB3",
    icianName: "Ician 1",
    externalIcianId: "ician1@faithtechnologies.com",
    address: {
      addressId: 3,
      latitude: "39.0954158",
      longitude: "-94.60573959999999"
    },
    location: {
      locationId: 3,
      locationName: "Location Name",
      customer: {
        customerId: 8,
        companyName: "Company Name"
      }
    },
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "3",
        symbolName: "OK",
        active: false
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        value: "2",
        symbolName: "Island Mode",
        active: false
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "3",
        symbolName: "Disconnected",
        active: false
      }
    ]
  },
  {
    siteId: 3,
    externalId: "25901ddrrFX999",
    name: "Development",
    plcId: "DEV",
    icianName: "IcianRonnie James Dio",
    externalIcianId: "ician1@faithtechnologies.com",
    address: {
      addressId: 3,
      latitude: "155.1236466666",
      longitude: "99.582469232"
    },
    location: {
      locationId: 3,
      locationName: "Location Name",
      customer: {
        customerId: 8,
        companyName: "Company Name"
      }
    },
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "2",
        symbolName: "FAULTED",
        active: false
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        value: "1",
        symbolName: "Tower Mode",
        active: false
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "2",
        symbolName: "Cellular",
        active: false
      }
    ]
  },
  {
    siteId: 4,
    externalId: "25901ddrrFX999",
    name: "Quality",
    plcId: "QA",
    icianName: "Tobias Sammeth",
    externalIcianId: "ician1@faithtechnologies.com",
    address: {
      addressId: 3,
      latitude: "44.2044953",
      longitude: "-88.45100619999999"
    },
    location: {
      locationId: 3,
      locationName: "Location Name",
      customer: {
        customerId: 8,
        companyName: "Company Name"
      }
    },
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "1",
        symbolName: "MAINTENANCE",
        active: false
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        value: "1",
        symbolName: "Tower Mode",
        active: false
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        sf: null,
        units: null,
        access: "R",
        mandatory: "true",
        valueMin: null,
        valueMax: null,
        value: "1",
        symbolName: "Landline",
        active: false
      }
    ]
  }
];