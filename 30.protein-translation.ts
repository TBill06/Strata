//v1.0 Brute Force - but apparently can't do better than this, so let's gooo!
export function translate(encode: string): string[] {
  const protein = new Map<string, string[]>([
    ["Methionine", ["AUG"]],
    ["Phenylalanine", ["UUU", "UUC"]],
    ["Leucine", ["UUA", "UUG"]],
    ["Serine", ["UCU", "UCC", "UCA", "UCG"]],
    ["Tyrosine", ["UAU", "UAC"]],
	  ["Cysteine", ["UGU", "UGC"]],
    ["Tryptophan",["UGG"]],
    ["STOP", ["UAA", "UAG", "UGA"]]
  ])
  let ans: string[] = [];
  let flag: boolean = false;
  for(let i = 0; i<encode.length; i+=3) {
    let invalid: boolean = true;
    for(let [key,value] of protein) {
      if (value.includes(encode.slice(i,i+3))) {
        invalid = false;
        if (key === "STOP") {
          flag = true;
          break
        } else {
          ans.push(key)
        }
      }
    }
    if (invalid) throw new Error ("Invalid codon")
    if (flag) return ans
  }
  return ans
}

// v2.0 if I flat the protein map, I can use a single loop
export function translatev2(encode: string): string[] {
  const codonMap: { [codon: string]: string } = {
    AUG: "Methionine",
    UUU: "Phenylalanine", UUC: "Phenylalanine",
    UUA: "Leucine", UUG: "Leucine",
    UCU: "Serine", UCC: "Serine", UCA: "Serine", UCG: "Serine",
    UAU: "Tyrosine", UAC: "Tyrosine",
    UGU: "Cysteine", UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP", UAG: "STOP", UGA: "STOP"
  };
  const ans: string[] = [];
  for (let i = 0; i < encode.length; i += 3) {
    const codon = encode.slice(i, i + 3);
    const protein = codonMap[codon];
    if (!protein) throw new Error("Invalid codon");
    if (protein === "STOP") break;
    ans.push(protein);
  }
  return ans;
}