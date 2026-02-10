/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Sum Of Multiplies
 * The program computes the sum of points depending on the level and the items
*/

/**
 * Calculates the sum of unique multiples of magical items below a certain level.
 * @param {number[]} magicalItems - Array of base values of magical items.
 * @param {number} level - The level reached.
 * @returns {number} - The sum of all unique multiples.
 */
export const sum = function(magicalItems, level) {
  const uniqueMultiples = new Set();

  for (const item of magicalItems) {
    if (item === 0) continue;
    let iterator = 1;
    let currentMultiple = item * iterator;

    while (currentMultiple < level) {
      uniqueMultiples.add(currentMultiple);
      iterator++;
      currentMultiple = item * iterator;
    }
  }

  let totalPoints = 0;
  uniqueMultiples.forEach((value) => {
    totalPoints += value;
  })

  return totalPoints;
}