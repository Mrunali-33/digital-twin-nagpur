export const sensors = [
{
  id: 1,
  name: "NEERI AQI Sensor",
  position: [21.1224, 79.0708],

  type: "AQI",

  status: "ONLINE",

  battery: 88,

  signal: "STRONG",

  lastUpdate: "12:45 PM",
},

  {
    id: 2,
    name: "NEERI Weather Station",
    position: [21.1236, 79.0718],
    type: "WEATHER",
    status: "ONLINE",
    battery: 73,
    signal: "GOOD",
    lastUpdate: "12:45 PM",
  },

  {
    id: 3,
    name: "Rahate Water Sensor",
    position: [21.1297, 79.0752],
    type: "WATER",
    status: "WARNING",
    battery: 24,
    signal: "WEAK",
    lastUpdate: "12:44 PM",
  },

  {
    id: 4,
    name: "Rahate Flood Sensor",
    position: [21.1284, 79.0740],
    type: "FLOOD",
    status: "OFFLINE",
    battery: 5,
    signal: "LOST",
    lastUpdate: "11:58 AM",
  },
];