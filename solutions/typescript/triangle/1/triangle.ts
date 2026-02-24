/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Triangle Type Classifier
 * This module determines if a triangle is equilateral, isosceles, or scalene
 * based on its side lengths and the triangle inequality principle.
 * @module Triangle
 */

export class Triangle {
  private readonly sides: number[];

  /**
   * Initializes the triangle and stores its sides if they form a valid triangle.
   * @param {...number[]} sideLengths - The three side lengths of the triangle.
   */
  constructor(...sideLengths: number[]) {
    this.sides = sideLengths;
  }

  /**
   * Checks if the triangle is equilateral (all sides equal).
   * @returns {boolean} True if equilateral, false otherwise.
   */
  get isEquilateral(): boolean {
    return this.isValidTriangle() && new Set(this.sides).size === 1;
  }

  /**
   * Checks if the triangle is isosceles (at least two sides equal).
   * @returns {boolean} True if isosceles, false otherwise.
   */
  get isIsosceles(): boolean {
    return this.isValidTriangle() && new Set(this.sides).size <= 2;
  }

  /**
   * Checks if the triangle is scalene (all sides different).
   * @returns {boolean} True if scalene, false otherwise.
   */
  get isScalene(): boolean {
    return this.isValidTriangle() && new Set(this.sides).size === 3;
  }

  /**
   * Validates the triangle based on side lengths and the triangle inequality.
   * @returns {boolean} True if the triangle is valid.
   */
  private isValidTriangle(): boolean {
    const [sideA, sideB, sideC] = this.sides;
    const allSidesPositive = this.sides.every(side => side > 0);
    const triangleInequality = 
      sideA + sideB >= sideC && 
      sideB + sideC >= sideA && 
      sideA + sideC >= sideB;

    return this.sides.length === 3 && allSidesPositive && triangleInequality;
  }
}