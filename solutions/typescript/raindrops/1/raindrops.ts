export function convert(givenNumber: number) {
  let result: string = '';
  if (givenNumber % 3 === 0) {
    result += 'Pling';
  } 
  if (givenNumber % 5 === 0) {
    result += 'Plang';
  }
  if (givenNumber % 7 === 0) {
    result += 'Plong';
  }
  if (givenNumber % 7 !== 0 && givenNumber % 5 !== 0 && givenNumber % 3 !== 0) {
    result = String(givenNumber);
  }
  return result;
}
