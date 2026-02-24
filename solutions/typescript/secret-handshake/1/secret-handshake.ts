/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Secret Handshake Generator
 * This module converts a decimal number into a sequence of secret 
 * handshake actions based on its binary representation.
 * @module SecretHandshake
 */

/**
 * Returns the sequence of actions for a given handshake code.
 * @param {number} handshakeCode - A decimal number between 1 and 31.
 * @returns {string[]} An array of strings representing the actions.
 */
export function commands(handshakeCode: number): string[] {
  const actions: string[] = [];

  // Check the 1st bit (2^0 = 1)
  if ((handshakeCode & 1) !== 0) {
    actions.push('wink');
  }
  // Check the 2nd bit (2^1 = 2)
  if ((handshakeCode & 2) !== 0) {
    actions.push('double blink');
  }
  // Check the 3rd bit (2^2 = 4)
  if ((handshakeCode & 4) !== 0) {
    actions.push('close your eyes');
  }
  // Check the 4th bit (2^3 = 8)
  if ((handshakeCode & 8) !== 0) {
    actions.push('jump');
  }
  // Check the 5th bit (2^4 = 16) for reversal
  if ((handshakeCode & 16) !== 0) {
    actions.reverse();
  }

  return actions;
}