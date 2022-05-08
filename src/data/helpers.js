import defaultStyles from './defaultStyles';
import fullDict from './dicts';

export function getRandomIntInclusive(min, max, resolution) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  const reminder = number % resolution;
  number = number - reminder;
  return number;
}

export function generateTarget(level) {
  // level is an object with two keys:
  // example:
  // {
  //   properties: ['width', 'height'],
  //   defaultStyles: {
  //     width: 100,
  //     height: 100,
  //   },
  // },

  const res = { ...defaultStyles };

  for (let property of level.properties) {
    const { min, max, resolution } = fullDict[property];

    if (typeof defaultStyles[property] === 'number') {
      res[property] = getRandomIntInclusive(min, max, resolution);
    }
  }

  return res;
}

export function isEqual(shape1, shape2) {
  return JSON.stringify(shape1) === JSON.stringify(shape2);
}

export function getRGBValues(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

export function getLevelIndex(levelStr) {
  // get the level in the format: level-n, and return n-1.
  return Number(levelStr.split('-')[1] - 1);
}
