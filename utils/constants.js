export const WILD_LIFE_DATA = [];

export const KINGDOM = {
  animalia: {
    id: 1,
    color: "#896244ff",
    name: "Reino Animal",
  },
  plantae: {
    id: 47126,
    color: "#65985aff",
    name: "Reino Planta",
  },
  funga: {
    id: 47170,
    color: "#7a5472ff",
    name: "Reino Fungi",
  },
};

export const CLIMBING_ZONE = {
  elmanzano: {
    id: 1,
    name: "El Manzano",
    lat: -33.554166688548584,
    lng: -70.37831746080964,
    radius: 4,
  },
};

export const DISTRIBUTIONS = {
  MICRO_ENDEMIC: {
    id: 0,
    name: "Micro",
    shortName: "MIC",
    color: "#78aa1fff",
    borderColor: "#e5f6c4ff",
  },
  ENDEMIC: {
    id: 1,
    name: "Endémica",
    shortName: "END",
    color: "#78aa1fff",
    borderColor: "#e5f6c4ff",
  },

  NATIVE: {
    id: 2,
    name: "Nativa",
    shortName: "NAT",
    color: "#f08546ff",
    borderColor: "#f0e0d6ff",
  },

  EXOTIC: {
    id: 3,
    name: "Introducida",
    shortName: "INT",
    color: "#df1b7cff",
    borderColor: "#f5dfebff",
  },
};

export const CONSERVATION_STATUS = {
  NE: {
    id: "NE",
    name: "No evaluado",
    color: "#ffffff",
    borderColor: "#010007",
  },

  DD: {
    id: "DD",
    name: "Insuficiencia de datos",
    color: "#9c9f9d",
    borderColor: "#010007",
  },

  LC: {
    id: "LC",
    name: "Preocupación menor",
    color: "#087465",
    borderColor: "#ffffffff",
  },

  NT: {
    id: "NT",
    name: "Casi amenazada",
    color: "#087465",
    borderColor: "#9bcc99ff",
  },

  VU: {
    id: "VU",
    name: "Vulnerable",
    color: "#e19b00",
    borderColor: "#f7f0cdff",
  },

  EN: {
    id: "EN",
    name: "En peligro",
    color: "#eb6209",
    borderColor: "#fbc79aff",
  },

  CR: {
    id: "CR",
    name: "En peligro crítico",
    color: "#e40521",
    borderColor: "#f8caceff",
  },

  EW: {
    id: "EW",
    name: "Extinto en estado salvaje",
    color: "#1a0046",
    borderColor: "#ffffffff",
  },

  EX: {
    id: "EX",
    name: "Extinto",
    color: "#010007",
    borderColor: "#e10613ff",
  },
};

export const CONSERVATION_STATUS_LIST = [
  CONSERVATION_STATUS["DD"],
  CONSERVATION_STATUS["NE"],
  CONSERVATION_STATUS["LC"],
  CONSERVATION_STATUS["NT"],
  CONSERVATION_STATUS["VU"],
  CONSERVATION_STATUS["EN"],
  CONSERVATION_STATUS["CR"],
  CONSERVATION_STATUS["EW"],
  CONSERVATION_STATUS["EX"],
];