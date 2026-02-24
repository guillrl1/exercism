export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export function decodedValue(colorBands: string[]): number {
  const firstDigit: number = COLORS.indexOf(colorBands[0]);
  const secondDigit: number = COLORS.indexOf(colorBands[1]);

  // Combine digits: the first digit is the tens place, the second is the units.
  return firstDigit * 10 + secondDigit;
}