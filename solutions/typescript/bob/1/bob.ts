/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 10 2026
 * @desc Bob the Lackadaisical Teenager
 * This module determines Bob's reaction to different types of speech
 * based on punctuation and capitalization.
 * @module Bob
 */

/**
 * Determines Bob's response based on the input message.
 * @param {string} inputMessage - The text spoken to Bob.
 * @returns {string} Bob's standard response.
 */
export function hey(inputMessage: string): string {
  const message: string = inputMessage.trim();

  if (message === '') {
    return 'Fine. Be that way!';
  }

  const isQuestion: boolean = message.endsWith('?');
  const isYelling: boolean = /[A-Z]/.test(message) && message === message.toUpperCase();

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }
  if (isYelling) {
    return 'Whoa, chill out!';
  }
  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
}