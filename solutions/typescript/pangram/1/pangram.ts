export const isPangram = (sentence: string): boolean => {
  const lowerSentence = sentence.toLowerCase();
  
  return ALPHABET.split('').every(letter => lowerSentence.includes(letter));
};
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';