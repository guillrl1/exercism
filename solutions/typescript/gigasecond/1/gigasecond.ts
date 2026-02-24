/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Gigasecond Calculator
 * This module calculates the moment that is one gigasecond (10^9 seconds)
 * after a given moment in time.
 * @module Gigasecond
 */

/**
 * Class to calculate the date after a gigasecond has passed.
 */
export class Gigasecond {
  /** Number of milliseconds in a gigasecond (10^9 * 1000) */
  private static readonly GIGASECOND_IN_MS: number = 1000000000000;
  private readonly startingMoment: Date;

  /**
   * Initializes the Gigasecond calculator with a starting date.
   * @param {Date} startDate - The initial date to start the calculation from.
   */
  constructor(startDate: Date) {
    this.startingMoment = startDate;
  }

  /**
   * Calculates the date exactly one gigasecond after the starting date.
   * @returns {Date} The resulting date after adding 10^9 seconds.
   */
  public date(): Date {
    const totalTimeInMs: number = this.startingMoment.getTime() + Gigasecond.GIGASECOND_IN_MS;
    return new Date(totalTimeInMs);
  }
}