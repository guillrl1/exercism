/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Protein Translator
 * This module translates RNA sequences into proteins by mapping codons 
 * to amino acids and handling STOP sequences.
 * @module ProteinTranslation
 */

/**
 * Translates an RNA sequence into an array of proteins.
 * * Each three-nucleotide sequence (codon) maps to a specific amino acid.
 * The process stops immediately if a STOP codon (UAA, UAG, UGA) is encountered.
 * * @param {string} rna - The RNA sequence to translate (e.g., "AUGUUUUCU").
 * @returns {string[]} An array of translated amino acids.
 * @throws {Error} If a codon is invalid or not found in the mapping table.
 */
export function translate(rna: string | undefined): string[] {
  if (!rna) return [];

  const proteins: string[] = [];
  const codonMap: { [key: string]: string } = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
  };

  // Iterate through the string in chunks of 3 characters (codons)
  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substring(i, i + 3);
    const protein = codonMap[codon];

    if (!protein) {
      throw new Error('Invalid codon');
    }

    if (protein === 'STOP') {
      break;
    }

    proteins.push(protein);
  }

  return proteins;
}