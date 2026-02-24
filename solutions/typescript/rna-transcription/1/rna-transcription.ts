export const toRna = (rna: string): string => {
  let complement = '';
  for (let nucleotide of rna) {
    switch (nucleotide) {
      case 'G' : complement += 'C'; break;
      case 'C' : complement += 'G'; break;
      case 'T' : complement += 'A'; break;
      case 'A' : complement += 'U'; break;
      default: throw new Error('Invalid input DNA.'); break;
    }
  }
  return complement;   
};