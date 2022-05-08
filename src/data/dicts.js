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
  'border-radius': {
    min: 0,
    max: 50,
    resolution: 5,
  },
};

const borderDict = {
  'border-right-width': {
    min: 70,
    max: 150,
    resolution: 10,
  },
  'border-bottom-width': {
    min: 70,
    max: 150,
    resolution: 10,
  },
  'border-left-width': {
    min: 70,
    max: 150,
    resolution: 10,
  },
};

const valuesDict = {
  red: {
    min: 0,
    max: 255,
    resolution: 15,
  },
  green: {
    min: 0,
    max: 255,
    resolution: 15,
  },
  blue: {
    min: 0,
    max: 255,
    resolution: 15,
  },
};

const fullDict = { ...propertiesDict, ...valuesDict, ...borderDict };

export default fullDict;
