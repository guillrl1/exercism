//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (n) => {
  let plinplinplon = '';
  if (n % 3 === 0) 
    plinplinplon += 'Pling';
  if (n % 5 === 0) 
    plinplinplon += 'Plang';
  if (n % 7 === 0)
    plinplinplon += 'Plong';
  if (plinplinplon === '')
    plinplinplon += n;
  return plinplinplon;
};
