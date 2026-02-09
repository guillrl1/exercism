//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  let complement = '';
  for (let nucleotide of rna) {
    switch (nucleotide) {
      case 'G' : complement += 'C'; break;
      case 'C' : complement += 'G'; break;
      case 'T' : complement += 'A'; break;
      case 'A' : complement += 'U'; break;
    }
  }
  return complement;   
};
