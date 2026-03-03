/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Number Classifier (Nicomachus' Scheme)
 * This module classifies positive integers as perfect, abundant, or deficient
 * based on their aliquot sum.
 * @module NumberClassifier
 */

/**
 * Classifies a positive integer based on Nicomachus' scheme.
 * * The classification is based on the aliquot sum (sum of proper divisors):
 * - Perfect: Aliquot sum == number.
 * - Abundant: Aliquot sum > number.
 * - Deficient: Aliquot sum < number.
 * * @param {number} n - The positive integer to classify.
 * @returns {string} 'perfect', 'abundant', or 'deficient'.
 * @throws {Error} If the input is not a positive integer.
 */
export function classify(n: number): string {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  // Proper divisors sum (Aliquot sum)
  let aliquotSum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      aliquotSum += i;
    }
  }

  if (aliquotSum === n) {
    return 'perfect';
  } else if (aliquotSum > n) {
    return 'abundant';
  } else {
    return 'deficient';
  }
}