// v1.0 Easy peasy
export function compute(left: string, right: string): number {
  let hamming: number = 0;
  if (left.length != right.length) throw new Error ("DNA strands must be of equal length.")
  for (let i=0; i<left.length; i++) {
    if(left[i] != right[i]) hamming++
  }
  return hamming;
}

// v2.0 One-liner
export function computev2(left: string, right: string): number {
  if (left.length !== right.length) throw new Error("DNA strands must be of equal length.");
  return left.split('').reduce((acc, curr, idx) => acc + (curr !== right[idx] ? 1 : 0), 0);
}

// v3.0 Filter and Length
export function computev3(left: string, right: string): number {
  if (left.length !== right.length) throw new Error("DNA strands must be of equal length.");
  return left.split('').filter((char, idx) => char !== right[idx]).length;
}