/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Word Count Analyzer
 * This module counts the occurrences of unique words in a text string, 
 * handling contractions, numbers, and various punctuation.
 * @module WordCount
 */

/**
 * Counts the occurrences of each word in a given subtitle string.
 * @param {string} subtitleText - The text to be analyzed.
 * @returns {Map<string, number>} A map containing words as keys and their counts as values.
 */
export function count(subtitleText: string): Map<string, number> {
  const wordCounts: Map<string, number> = new Map();
  
  /**
   * Regular Expression breakdown:
   * [a-z0-9]+          : Matches one or more alphanumeric characters
   * ('[a-z0-9]+)?      : Optionally matches an apostrophe followed by more alphanumeric 
   * characters (for contractions like "that's" or "don't")
   * /gi                : Global and Case-Insensitive search
   */
  const wordRegex: RegExp = /[a-z0-9]+('[a-z0-9]+)?/gi;
  const foundWords: RegExpMatchArray | null = subtitleText.match(wordRegex);

  if (foundWords) {
    for (const rawWord of foundWords) {
      const normalizedWord: string = rawWord.toLowerCase();
      const currentCount: number = wordCounts.get(normalizedWord) || 0;
      wordCounts.set(normalizedWord, currentCount + 1);
    }
  }

  return wordCounts;
}