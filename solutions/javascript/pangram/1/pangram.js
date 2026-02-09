export const isPangram = (sentence) => {
  const lowerSentence = sentence.toLowerCase();
  
  return ALPHABET.split('').every(letter => lowerSentence.includes(letter));
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';