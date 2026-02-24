/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Darts Score Calculator
 * This module calculates the score of a single dart toss based on 
 * its distance from the target's center.
 * @module Darts
 */

/**
 * Calculates the score of a dart throw given its coordinates.
 * @param {number} xCoordinate - The horizontal position of the dart.
 * @param {number} yCoordinate - The vertical position of the dart.
 * @returns {number} The points earned (10, 5, 1, or 0).
 */
export function score(xCoordinate: number, yCoordinate: number): number {
  const distanceFromCenter: number = Math.sqrt(xCoordinate ** 2 + yCoordinate ** 2);

  if (distanceFromCenter <= 1) {
    return 10;
  }
  if (distanceFromCenter <= 5) {
    return 5;
  }
  if (distanceFromCenter <= 10) {
    return 1;
  }
  return 0;
}