const propertiesDict = {
  width: {
    min: 70,
    max: 150,
    resolution: 5,
  },
  height: {
    min: 70,
    max: 150,
    resolution: 5,
  },
};

const valuesDict = {
  red: {
    min: 0,
    max: 255,
    resolution: 5,
  },
  green: {
    min: 0,
    max: 255,
    resolution: 5,
  },
  blue: {
    min: 0,
    max: 255,
    resolution: 5,
  },
};

const fullDict = { ...propertiesDict, ...valuesDict };

export default fullDict;
