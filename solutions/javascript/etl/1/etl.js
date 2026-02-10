//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  const newData = {};
  
  for (const score in oldData) {
    const letters = oldData[score];
    letters.forEach(letter => {
      const lowerLetter = letter.toLowerCase();
    
      newData[lowerLetter] = Number(score);
    });
  }

  return newData;
};
