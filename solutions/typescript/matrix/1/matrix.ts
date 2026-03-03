/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Matrix Row and Column Parser
 * This module parses a string representation of a matrix and provides
 * access to its rows and columns.
 * @module Matrix
 */

/**
 * Class representing a mathematical matrix parsed from a string.
 */
export class Matrix {
  private readonly _rows: number[][];
  private readonly _columns: number[][];

  /**
   * Constructs a Matrix object from a string with embedded newlines.
   * @param {string} matrixString - The string representing the matrix (e.g., "9 8\n5 3").
   */
  constructor(matrixString: string) {
    // Parse rows: split by newline, then split by space and convert to numbers
    this._rows = matrixString.split('\n').map((row) => 
      row.split(/\s+/).map(Number)
    );

    // Parse columns: map through the first row's indices to build columns
    this._columns = this._rows[0].map((_, columnIndex) =>
      this._rows.map((row) => row[columnIndex])
    );
  }

  /**
   * Gets a list of the rows, reading each row from left to right.
   * @returns {number[][]} An array of number arrays representing the rows.
   */
  get rows(): number[][] {
    return this._rows;
  }

  /**
   * Gets a list of the columns, reading each column from top to bottom.
   * @returns {number[][]} An array of number arrays representing the columns.
   */
  get columns(): number[][] {
    return this._columns;
  }
}