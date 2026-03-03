/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Conway's Game of Life
 * This module implements a cellular automaton that evolves based on
 * a set of survival and birth rules.
 * @module GameOfLife
 */

/**
 * Class representing the Game of Life grid and its evolution logic.
 */
export class GameOfLife {
  private grid: number[][];

  /**
   * Initializes the game with a 2D matrix of 1s (alive) and 0s (dead).
   * @param {number[][]} matrix - The initial state of the grid.
   */
  constructor(matrix: number[][]) {
    // We create a deep copy to ensure the original input is not mutated
    this.grid = matrix.map((row) => [...row]);
  }

  /**
   * Evolves the grid to the next generation based on Conway's rules.
   * Rules:
   * 1. Live cell with 2-3 neighbors survives.
   * 2. Dead cell with 3 neighbors becomes alive.
   * 3. All other cells die or remain dead.
   * @returns {number[][]} The state of the next generation.
   */
  public tick(): number[][] {
    const rows = this.grid.length;
    if (rows === 0) return [];
    const cols = this.grid[0].length;

    const nextGeneration = this.grid.map((row, r) =>
      row.map((cell, c) => {
        const neighbors = this.countLiveNeighbors(r, c);
        if (cell === 1) {
          return neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          return neighbors === 3 ? 1 : 0;
        }
      })
    );

    this.grid = nextGeneration;
    return this.grid;
  }

  /**
   * Returns the current state of the grid.
   * @returns {number[][]} The current matrix.
   */
  public state(): number[][] {
    return this.grid;
  }

  /**
   * Calculates the number of live neighbors for a cell at [row, col].
   * @param {number} row - Row index.
   * @param {number} col - Column index.
   * @returns {number} Count of live adjacent cells.
   */
  private countLiveNeighbors(row: number, col: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Skip the cell itself

        const newRow = row + i;
        const newCol = col + j;

        // Check grid boundaries
        if (
          newRow >= 0 &&
          newRow < this.grid.length &&
          newCol >= 0 &&
          newCol < this.grid[0].length
        ) {
          count += this.grid[newRow][newCol];
        }
      }
    }
    return count;
  }
}