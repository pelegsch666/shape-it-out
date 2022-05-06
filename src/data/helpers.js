import defaultStyles from './defaultStyles';

export function getRandomIntInclusive(min, max, resolution) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  const reminder = number % resolution;
  number = number - reminder;
  return number;
}

export function generateTarget(level) {
  const res = { ...defaultStyles };
  for (let property of level) {
    const { min, max, resolution } = fullDict[property];
    res.property = getRandomIntInclusive(min, max, resolution);
  }
}

export function isEqual(shape1, shape2) {
  return JSON.stringify(shape1) === JSON.stringify(shape2);
}
