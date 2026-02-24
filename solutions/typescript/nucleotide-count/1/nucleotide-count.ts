export function nucleotideCounts(dnaSequence: string): { A: number, C: number, G: number, T: number } {
  const counts: { [key: string]: number } = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const nucleotide of dnaSequence) {
    if (counts[nucleotide] === undefined) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[nucleotide]++;
  }

  return counts as { A: number, C: number, G: number, T: number };
}