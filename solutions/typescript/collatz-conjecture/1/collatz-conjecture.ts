export function steps(pickedNumber: number): number {
  let counter: number = 0;
  if (pickedNumber < 1 || !Number.isInteger(pickedNumber)) {
    throw new Error('Only positive integers are allowed');
  }
  while (pickedNumber > 1) {
    if (pickedNumber % 2 === 0) {
      pickedNumber /= 2;
    } else {
      pickedNumber = pickedNumber * 3 + 1;
    }
    ++counter;
  }
  return counter;
}
