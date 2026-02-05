//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGASECOND_IN_MS = 1e9 * 1000; 
  return new Date(date.getTime() + GIGASECOND_IN_MS);
};