/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Rational Number Manager
 * This module implements a class for representing and performing 
 * arithmetic operations on rational numbers (p/q).
 * @module Rational
 */

/**
 * Class representing a rational number.
 * Rational numbers are always stored in their reduced standard form.
 */
export class Rational {
  private _numerator: number;
  private _denominator: number;

  /**
   * Initializes a rational number and reduces it to lowest terms.
   * @param {number} numerator - The top part of the fraction.
   * @param {number} denominator - The bottom part of the fraction (cannot be zero).
   */
  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero.');
    }
    this._numerator = numerator;
    this._denominator = denominator;
    this.reduce();
  }

  get numerator(): number { return this._numerator; }
  get denominator(): number { return this._denominator; }

  /**
   * Adds another rational number to the current one.
   * Formula: (a1 * b2 + a2 * b1) / (b1 * b2)
   * @param {Rational} other - The rational number to add.
   * @returns {Rational} A new reduced Rational instance.
   */
  public add(other: Rational): Rational {
    return new Rational(
      this._numerator * other.denominator + other.numerator * this._denominator,
      this._denominator * other.denominator
    );
  }

  /**
   * Subtracts another rational number from the current one.
   * Formula: (a1 * b2 - a2 * b1) / (b1 * b2)
   * @param {Rational} other - The rational number to subtract.
   * @returns {Rational} A new reduced Rational instance.
   */
  public sub(other: Rational): Rational {
    return new Rational(
      this._numerator * other.denominator - other.numerator * this._denominator,
      this._denominator * other.denominator
    );
  }

  /**
   * Multiplies the current rational number by another.
   * Formula: (a1 * a2) / (b1 * b2)
   * @param {Rational} other - The rational number to multiply by.
   * @returns {Rational} A new reduced Rational instance.
   */
  public mul(other: Rational): Rational {
    return new Rational(
      this._numerator * other.numerator,
      this._denominator * other.denominator
    );
  }

  /**
   * Divides the current rational number by another.
   * Formula: (a1 * b2) / (a2 * b1)
   * @param {Rational} other - The divisor rational number.
   * @returns {Rational} A new reduced Rational instance.
   */
  public div(other: Rational): Rational {
    return new Rational(
      this._numerator * other.denominator,
      this._denominator * other.numerator
    );
  }

  /**
   * Returns the absolute value of the rational number.
   * @returns {Rational} A new Rational instance with positive components.
   */
  public abs(): Rational {
    return new Rational(Math.abs(this._numerator), Math.abs(this._denominator));
  }

  /**
   * Raises the rational number to an integer power.
   * @param {number} n - The integer power.
   * @returns {Rational} A new reduced Rational instance.
   */
  public exprational(n: number): Rational {
    if (n >= 0) {
      return new Rational(Math.pow(this._numerator, n), Math.pow(this._denominator, n));
    } else {
      const m = Math.abs(n);
      return new Rational(Math.pow(this._denominator, m), Math.pow(this._numerator, m));
    }
  }

  /**
   * Raises the rational number to a real (floating-point) power.
   * @param {number} x - The real power.
   * @returns {number} The resulting floating-point value.
   */
  public expreal(x: number): number {
    return Math.pow(x, this._numerator / this._denominator);
  }

  /**
   * Reduces the rational number to its lowest terms and ensures 
   * the denominator is positive (standard form).
   * @returns {Rational} The current instance (for chaining).
   */
  public reduce(): Rational {
    const commonDivisor = this.gcd(Math.abs(this._numerator), Math.abs(this._denominator));
    this._numerator /= commonDivisor;
    this._denominator /= commonDivisor;

    if (this._denominator < 0) {
      this._numerator *= -1;
      this._denominator *= -1;
    }
    return this;
  }

  /**
   * Calculates the Greatest Common Divisor using the Euclidean algorithm.
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} The GCD of a and b.
   */
  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }
}