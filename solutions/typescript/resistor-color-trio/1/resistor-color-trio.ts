/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Resistor Color Trio Decoder
 * This module decodes three color bands into a resistance label with metric prefixes.
 * @module ResistorColorTrio
 */

export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export function decodedResistorValue(colorBands: string[]): string {
  const firstDigit: number = COLORS.indexOf(colorBands[0]);
  const secondDigit: number = COLORS.indexOf(colorBands[1]);
  const exponent: number = COLORS.indexOf(colorBands[2]);

  let ohms: number = (firstDigit * 10 + secondDigit) * Math.pow(10, exponent);

  if (ohms >= 1000000000) {
    return `${ohms / 1000000000} gigaohms`;
  }
  if (ohms >= 1000000) {
    return `${ohms / 1000000} megaohms`;
  }
  if (ohms >= 1000) {
    return `${ohms / 1000} kiloohms`;
  }
  return `${ohms} ohms`;
}