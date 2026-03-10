// v.1.0 Ezz solution, O(n) time and O(1) space
// can use Record<string, number> = { A: 0, C: 0, G: 0, T: 0 } for better readability
export function nucleotideCounts(sequence: string): {} {
    const nuc: { [index: string]: number } = { A: 0, C: 0, G: 0, T: 0 }
    for (let i of sequence) {
        if (i in nuc) {
            nuc[i] += 1
        }
        else {
            throw new Error("Invalid nucleotide in strand")
        }
    }
    return nuc
}