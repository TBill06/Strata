export function toRna(dna: string): string {
  const strandMap: {[key: string]: string} = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }
  const dnaArr = dna.split('')
  return [...dnaArr].map((cell) => {
    const rna = strandMap[cell];
    if (!rna) {
      throw new Error("Invalid input DNA.")
    }
    return rna;
  }).join('');
}