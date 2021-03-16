// sitesList.js
module.exports = [
  {
    siteId: 1,
    externalId: "25251sdsdSD111",
    name: "Bad River",
    plcId: "BADRIVER",
    externalIcianId: "todd.connor@faithtechnologies.com",
    icianName: "Todd Connor",
    latitude: "39.9697894",
    longitude: "-75.1585807",
    companyName: "Atlantida Inc.",
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "MAINTENANCE",
            value: "1",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "FAULTED",
            value: "2",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "ALARM",
            value: "3",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "WARNING",
            value: "4",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "OK",
            value: "5",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
        ],
        value: "5",
        active: false,
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Tower Mode",
            value: "1",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
          {
            name: "Island Mode",
            value: "2",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
        ],
        value: "2",
        active: false,
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Landline",
            value: "1",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Cellular",
            value: "2",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Disconnected",
            value: "3",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
        ],
        value: "3",
        active: false,
      },
    ],
  },
  {
    siteId: 2,
    externalId: "78251xxffSD666",
    name: "Lab 3",
    plcId: "LAB3",
    externalIcianId: "john.vanlinn@faithtechnologies.com",
    icianName: "John Van Linn",
    latitude: "40.0438137",
    longitude: "-75.0790643",
    companyName: "Umbrella Inc.",
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "MAINTENANCE",
            value: "1",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "FAULTED",
            value: "2",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "ALARM",
            value: "3",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "WARNING",
            value: "4",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "OK",
            value: "5",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
        ],
        value: "3",
        active: false,
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Tower Mode",
            value: "1",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
          {
            name: "Island Mode",
            value: "2",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
        ],
        value: "2",
        active: false,
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Landline",
            value: "1",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Cellular",
            value: "2",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Disconnected",
            value: "3",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
        ],
        value: "3",
        active: false,
      },
    ],
  },
  {
    siteId: 3,
    externalId: "25901ddrrFX999",
    name: "Development",
    plcId: "DEV",
    externalIcianId: "chuck.sands@faithtechnologies.com",
    icianName: "Chuck Sands",
    latitude: "40.0024137",
    longitude: "-75.2581124",
    companyName: "Microsoft Inc.",
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "MAINTENANCE",
            value: "1",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "FAULTED",
            value: "2",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "ALARM",
            value: "3",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "WARNING",
            value: "4",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "OK",
            value: "5",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
        ],
        value: "2",
        active: false,
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Tower Mode",
            value: "1",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
          {
            name: "Island Mode",
            value: "2",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Landline",
            value: "1",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Cellular",
            value: "2",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Disconnected",
            value: "3",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
        ],
        value: "2",
        active: false,
      },
    ],
  },
  {
    siteId: 4,
    externalId: "25901ddrrFX999",
    name: "Quality",
    plcId: "QA",
    externalIcianId: "daniel.peterson@faithtechnologies.com",
    icianName: "Dan Peterson",
    latitude: "40.0438137",
    longitude: "-75.0790643",
    companyName: "Apple Inc.",
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "MAINTENANCE",
            value: "1",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "FAULTED",
            value: "2",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "ALARM",
            value: "3",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "WARNING",
            value: "4",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "OK",
            value: "5",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Tower Mode",
            value: "1",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
          {
            name: "Island Mode",
            value: "2",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Landline",
            value: "1",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Cellular",
            value: "2",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Disconnected",
            value: "3",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
    ],
  },
  {
    siteId: 5,
    externalId: "25901ddrrFX657",
    name: "Not assigned",
    plcId: "QA",
    externalIcianId: "",
    icianName: "",
    latitude: "41.0438137",
    longitude: "-73.0790643",
    companyName: "Spotify Inc.",
    points: [
      {
        name: "SiteStatus",
        type: "uint16",
        label: "Site Status",
        description: "Site Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "MAINTENANCE",
            value: "1",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "FAULTED",
            value: "2",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "ALARM",
            value: "3",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "WARNING",
            value: "4",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
          {
            name: "OK",
            value: "5",
            label: "Site Status",
            description: "Site Status",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
      {
        name: "IslandMode",
        type: "uint16",
        label: "Island Mode",
        description: "Island Mode",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Tower Mode",
            value: "1",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
          {
            name: "Island Mode",
            value: "2",
            label: "Island Mode",
            description: "Island Mode",
            active: false,
          },
        ],
        value: "1",
        active: false,
      },
      {
        name: "CommStatus",
        type: "uint16",
        label: "Communications Status",
        description: "Communications Status",
        access: "R",
        mandatory: "true",
        symbols: [
          {
            name: "Landline",
            value: "1",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Cellular",
            value: "2",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
          {
            name: "Disconnected",
            value: "3",
            label: "Communication Status",
            description: "Communication Status",
            active: false,
          },
        ],
        value: "4",
        active: false,
      },
    ],
  },
];
