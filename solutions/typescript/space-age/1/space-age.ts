/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Space Age Calculator
 * This module calculates how old someone would be on different planets
 * of the Solar System given their age in seconds.
 * @module SpaceAge
 */

export function age(planet: string, seconds: number): number {
  const EARTH_YEAR_IN_SECONDS: number = 31557600;
  
  const orbitalPeriods: Record<string, number> = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const ageInEarthYears: number = seconds / EARTH_YEAR_IN_SECONDS;
  const planetAge: number = ageInEarthYears / orbitalPeriods[planet.toLowerCase()];

  // Rounding to 2 decimal places as per Exercism standard requirements
  return Number(planetAge.toFixed(2));
}