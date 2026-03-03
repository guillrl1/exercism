/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Luhn Algorithm Validator
 * This module provides a function to validate strings of digits using 
 * the Luhn formula (checksum).
 * @module Luhn
 */

/**
 * Validates a string of digits using the Luhn algorithm.
 * * Rules:
 * 1. Strings of length 1 or less are invalid.
 * 2. Spaces are stripped.
 * 3. Every second digit from the right is doubled.
 * 4. If doubling results in a number > 9, subtract 9.
 * 5. The total sum must be divisible by 10.
 * * @param {string} digitString - The string to validate.
 * @returns {boolean} True if the string is valid according to Luhn.
 */
export function valid(digitString: string): boolean {
  // Remove all spaces
  const cleanString = digitString.replace(/\s/g, '');

  // Validation: Only digits allowed and length must be > 1
  if (cleanString.length <= 1 || /\D/.test(cleanString)) {
    return false;
  }

  const digits = cleanString.split('').map(Number);
  let sum = 0;
  
  // We process from right to left
  const isEvenLength = digits.length % 2 === 0;

  for (let i = 0; i < digits.length; i++) {
    let currentDigit = digits[i];

    if ((isEvenLength && i % 2 === 0) || (!isEvenLength && i % 2 !== 0)) {
      currentDigit *= 2;
      if (currentDigit > 9) {
        currentDigit -= 9;
      }
    }

    sum += currentDigit;
  }

  return sum % 10 === 0;
}