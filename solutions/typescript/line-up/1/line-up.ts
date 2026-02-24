export const format = (name: number, position: number): string => {
  let sufix = position % 100 === 11 || position % 100 === 12 || position % 100 === 13 ? 'th' :
              position%10 === 1 ? 'st' :
              position%10 === 2 ? 'nd' :
              position%10 === 3 ? 'rd' :
              'th';
  return `${name}, you are the ${position}${sufix} customer we serve today. Thank you!`;
};