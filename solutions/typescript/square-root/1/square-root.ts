/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Power-Efficient Square Root Calculator
 * This module calculates the integer square root of a target number 
 * using a binary search algorithm, avoiding external math libraries.
 * @module SquareRoot
 */

/**
 * Calculates the square root of a positive integer.
 * @param {number} targetValue - The number to find the square root of.
 * @returns {number} The integer square root.
 */
export function squareRoot(targetValue: number): number {
  if (targetValue === 1) {
    return 1;
  }

  let lowBound: number = 0;
  let highBound: number = targetValue;
  let resultRoot: number = 0;

  while (lowBound <= highBound) {
    const midPoint: number = Math.floor((lowBound + highBound) / 2);
    const squareOfMid: number = midPoint * midPoint;

    if (squareOfMid === targetValue) {
      return midPoint;
    }

    if (squareOfMid < targetValue) {
      lowBound = midPoint + 1;
      resultRoot = midPoint;
    } else {
      highBound = midPoint - 1;
    }
  }

  return resultRoot;
}