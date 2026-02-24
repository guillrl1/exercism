export function find(haystack: number[], needle: number): number | never {
  let leftPointer: number = 0;
  let rightPointer: number = haystack.length - 1;

  while (leftPointer <= rightPointer) {
    const middleIndex: number = Math.floor((leftPointer + rightPointer) / 2);
    const middleValue: number = haystack[middleIndex];

    if (middleValue === needle) {
      return middleIndex;
    }

    if (middleValue < needle) {
      leftPointer = middleIndex + 1;
    } else {
      rightPointer = middleIndex - 1;
    }
  }

  throw new Error('Value not in array');
}