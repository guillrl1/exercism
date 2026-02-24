export const count = (words: string) =>
  (words.toLowerCase().match(/\b([\w']+)\b/g) || [] as string[]).reduce(
    (counts, word: string) => counts.set(word, (counts.get(word) ?? 0) + 1),
    new Map<string, number>()
  );