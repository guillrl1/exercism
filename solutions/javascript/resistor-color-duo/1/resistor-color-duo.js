export const decodedValue = (band) => {
  const firstValue = COLORS.indexOf(band[0]);
  const secondValue = COLORS.indexOf(band[1]);
  return (firstValue * 10) + secondValue;
};

const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];