function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const targetsArray = [
  {
    width: getRandomIntInclusive(50, 170),
    height: getRandomIntInclusive(50, 170),
    'border-radius': getRandomIntInclusive(0, 50),
    red: getRandomIntInclusive(10, 230),
    green: getRandomIntInclusive(10, 230),
    blue: getRandomIntInclusive(10, 230),
    'border-top': 0,
    'border-right': 0,
    'border-bottom': 0,
    'border-left': 0,
  },
];

export default targetsArray;

/*
width
height
border-radius
border-top
border-left
border-bottom
border-right
red = 10
green = 20
blue = 255
backgrund-color = rgb(10, 20, 255)
*/
