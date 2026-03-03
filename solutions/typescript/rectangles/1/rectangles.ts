/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Rectangle Counter
 * This module counts the number of rectangles in an ASCII diagram.
 * @module Rectangles
 */

/**
 * Counts the number of rectangles in an ASCII grid.
 * * A rectangle is defined by four '+' corners connected by '-' and '|'.
 * * @param {string[]} lines - An array of strings representing the grid.
 * @returns {number} The total count of rectangles found.
 */
export function count(lines: string[]): number {
  let rectangles = 0;
  const rows = lines.length;
  if (rows === 0) return 0;
  const cols = lines[0].length;

  // Step 1: Iterate through every possible top-left corner (+)
  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (lines[r1][c1] !== '+') continue;

      // Step 2: Look for a potential top-right corner (+)
      for (let c2 = c1 + 1; c2 < cols; c2++) {
        if (lines[r1][c2] !== '+') continue;
        
        // Ensure the top edge is connected
        if (!isHorizontalConnected(lines, r1, c1, c2)) break;

        // Step 3: Look for bottom-left and bottom-right corners (+)
        for (let r2 = r1 + 1; r2 < rows; r2++) {
          if (lines[r2][c1] === '+' && lines[r2][c2] === '+') {
            // Ensure vertical and bottom edges are connected
            if (isVerticalConnected(lines, c1, r1, r2) && 
                isVerticalConnected(lines, c2, r1, r2) &&
                isHorizontalConnected(lines, r2, c1, c2)) {
              rectangles++;
            }
          }
          // Optimization: If vertical connection is broken, stop looking deeper for this pair
          if (!isVerticalEdge(lines[r2][c1]) || !isVerticalEdge(lines[r2][c2])) break;
        }
      }
    }
  }

  return rectangles;
}

/**
 * Checks if a horizontal line is continuous between two points.
 * @param lines The grid strings.
 * @param row The row index.
 * @param start Col start.
 * @param end Col end.
 */
function isHorizontalConnected(lines: string[], row: number, start: number, end: number): boolean {
  for (let i = start + 1; i < end; i++) {
    if (lines[row][i] !== '-' && lines[row][i] !== '+') return false;
  }
  return true;
}

/**
 * Checks if a vertical line is continuous between two points.
 * @param lines The grid strings.
 * @param col The column index.
 * @param start Row start.
 * @param end Row end.
 */
function isVerticalConnected(lines: string[], col: number, start: number, end: number): boolean {
  for (let i = start + 1; i < end; i++) {
    if (lines[i][col] !== '|' && lines[i][col] !== '+') return false;
  }
  return true;
}

/**
 * Validates if a character can be part of a vertical edge.
 */
function isVerticalEdge(char: string): boolean {
  return char === '|' || char === '+';
}