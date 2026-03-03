/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Scrabble Score Calculator
 * This module computes the Scrabble score for a given word based on 
 * standard letter values.
 * @module ScrabbleScore
 */

/**
 * Computes the Scrabble score for a given word.
 * * The score is calculated by summing the individual values of each letter:
 * - A, E, I, O, U, L, N, R, S, T: 1
 * - D, G: 2
 * - B, C, M, P: 3
 * - F, H, V, W, Y: 4
 * - K: 5
 * - J, X: 8
 * - Q, Z: 10
 * * @param {string} word - The word to be scored.
 * @returns {number} The total Scrabble score for the word.
 */
export function score(word: string | undefined): number {
  if (!word) {
    return 0;
  }

  const upperWord = word.toUpperCase();
  let totalScore = 0;

  for (const letter of upperWord) {
    switch (letter) {
      case 'A': case 'E': case 'I': case 'O': case 'U':
      case 'L': case 'N': case 'R': case 'S': case 'T':
        totalScore += 1;
        break;
      case 'D': case 'G':
        totalScore += 2;
        break;
      case 'B': case 'C': case 'M': case 'P':
        totalScore += 3;
        break;
      case 'F': case 'H': case 'V': case 'W': case 'Y':
        totalScore += 4;
        break;
      case 'K':
        totalScore += 5;
        break;
      case 'J': case 'X':
        totalScore += 8;
        break;
      case 'Q': case 'Z':
        totalScore += 10;
        break;
      default:
        // Ignore non-alphabetical characters if any
        break;
    }
  }

  return totalScore;
}