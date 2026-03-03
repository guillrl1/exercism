/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Atbash Cipher Implementation
 * This module provides functions to encode and decode text using the
 * ancient Atbash substitution cipher.
 * @module Atbash
 */

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba';

/**
 * Encodes a string using the Atbash cipher.
 * * Numbers are kept, punctuation is excluded, and output is grouped 
 * in blocks of 5 characters.
 * * @param {string} plainText - The text to be encoded.
 * @returns {string} The encoded ciphertext in groups of 5.
 */
export function encode(plainText: string): string {
  const processedText = plainText
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const encodedChars = processedText.split('').map((char) => {
    const index = ALPHABET.indexOf(char);
    return index !== -1 ? REVERSED_ALPHABET[index] : char;
  });

  // Group into blocks of 5 characters
  const result: string[] = [];
  for (let i = 0; i < encodedChars.length; i += 5) {
    result.push(encodedChars.slice(i, i + 5).join(''));
  }

  return result.join(' ');
}

/**
 * Decodes an Atbash ciphertext back to plain text.
 * * This function removes spaces and reverses the transposition.
 * * @param {string} cipherText - The Atbash encoded text.
 * @returns {string} The decoded plain text.
 */
export function decode(cipherText: string): string {
  const cleanText = cipherText.replace(/\s/g, '');

  return cleanText.split('').map((char) => {
    const index = REVERSED_ALPHABET.indexOf(char);
    return index !== -1 ? ALPHABET[index] : char;
  }).join('');
}