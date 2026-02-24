/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Sum Of Multiples
 * The program computes the sum of unique multiples of specific items 
 * that are strictly below a given level limit.
 * @module SumOfMultiples
 */

/**
 * Calculates the sum of unique multiples of magical items below a certain level.
 * @param {number[]} itemsBaseValues - Array of base values of magical items.
 * @param {number} levelLimit - The level reached (exclusive upper bound).
 * @returns {number} - The sum of all unique multiples.
 */
export const sum = function(itemsBaseValues: number[], levelLimit: number): number {
  const uniqueMultiples: Set<number> = new Set<number>();

  for (const itemBase of itemsBaseValues) {
    if (itemBase === 0) {
      continue;
    }

    let currentMultiple: number = itemBase;
    while (currentMultiple < levelLimit) {
      uniqueMultiples.add(currentMultiple);
      currentMultiple += itemBase;
    }
  }

  let totalPointsAccumulated: number = 0;
  uniqueMultiples.forEach((multipleValue: number) => {
    totalPointsAccumulated += multipleValue;
  });

  return totalPointsAccumulated;
};