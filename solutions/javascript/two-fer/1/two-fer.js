//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let dialogue = 'you';
  if (name !== undefined) {
    dialogue = name;
  }
  return `One for ${dialogue}, one for me.`
};
