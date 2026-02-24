/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc All Your Base Converter
 * This module converts a number represented as a sequence of digits from 
 * one base to another using positional notation.
 */

/**
 * Converts a sequence of digits from an input base to an output base.
 * @param {number[]} digits - The digits in the input base.
 * @param {number} inputBase - The source base.
 * @param {number} outputBase - The target base.
 * @returns {number[]} The digits in the output base.
 * @throws {Error} If bases are invalid or digits are out of range.
 */
export function convert(digits: number[], inputBase: number, outputBase: number): number[] {
  if (inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }
  if (outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }
  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0)) {
    throw new Error('Input has wrong format');
  }
  let decimalValue: number = 0;
  for (const digit of digits) {
    if (digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
    decimalValue = decimalValue * inputBase + digit;
  }
  if (decimalValue === 0) {
    return [0];
  }
  const resultDigits: number[] = [];
  while (decimalValue > 0) {
    resultDigits.unshift(decimalValue % outputBase);
    decimalValue = Math.floor(decimalValue / outputBase);
  }
  return resultDigits;
}