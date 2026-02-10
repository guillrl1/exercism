// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let number1 = '';
  let number2 = '';
  for (let char of array1) {
    number1 += char;
  }
  for (let char of array2) {
    number2 += char;
  }
  return Number(number1) + Number(number2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let evaluate = String(value);
  let i = 0;
  let j = evaluate.length - 1;
  while (i < j) {
    if (evaluate[i] !== evaluate[j]) {
      return false
    } 
    i++;
    j--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  const numberValue = Number(input);
  if (isNaN(numberValue) || numberValue === 0) {
    return 'Must be a number besides 0';
  }
  return '';
}
