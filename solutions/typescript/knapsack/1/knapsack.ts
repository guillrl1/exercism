/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Knapsack Problem Solver
 * This module solves the 0/1 Knapsack problem to determine the maximum value
 * that can be carried in a knapsack of a given capacity.
 * @module Knapsack
 */

/**
 * Type representing an item with weight and value.
 */
type Item = {
  weight: number;
  value: number;
};

/**
 * Determines the maximum value that can be obtained by selecting items
 * without exceeding the maximum weight capacity of the knapsack.
 * * This function implements the 0/1 Knapsack algorithm using 
 * dynamic programming.
 * * @param {Object} params - The problem parameters.
 * @param {number} params.maximumWeight - The total weight capacity.
 * @param {Item[]} params.items - The list of available items.
 * @returns {number} The maximum total value possible.
 */
export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number;
  items: Item[];
}): number {
  const numberOfItems = items.length;
  // Initialize a 2D array (DP table) with zeros
  // Rows represent items, columns represent weights from 0 to maximumWeight
  const dpTable: number[][] = Array.from({ length: numberOfItems + 1 }, () =>
    new Array(maximumWeight + 1).fill(0)
  );

  for (let i = 1; i <= numberOfItems; i++) {
    const currentItem = items[i - 1];
    for (let w = 0; w <= maximumWeight; w++) {
      if (currentItem.weight <= w) {
        // Maximize value: either take the current item or leave it
        dpTable[i][w] = Math.max(
          currentItem.value + dpTable[i - 1][w - currentItem.weight],
          dpTable[i - 1][w]
        );
      } else {
        // Item is too heavy, keep the value from the previous item set
        dpTable[i][w] = dpTable[i - 1][w];
      }
    }
  }

  return dpTable[numberOfItems][maximumWeight];
}