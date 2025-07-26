// v1.0 Brute
export function convert(val: number): string {
  let ans = '';
  if(val%3 && val%5 && val%7){
    return String(val);
  }
  if(!(val%3)){
    ans += "Pling"
  }
  if(!(val%5)){
    ans += "Plang"
  }
  if(!(val%7)){
    ans += "Plong"
  }
  return ans
}

// v2.0 Using ternary operator for a more concise solution
export function convert2(val: number): string {
  return (val % 3 ? '' : 'Pling') +
         (val % 5 ? '' : 'Plang') +
         (val % 7 ? '' : 'Plong') ||
         String(val);
}   

// v3.0 Using an array to collect results
export function convert3(val: number): string {
  const sounds: string[] = [];
  if (val % 3 === 0) sounds.push("Pling");
  if (val % 5 === 0) sounds.push("Plang");
  if (val % 7 === 0) sounds.push("Plong");
  return sounds.length ? sounds.join('') : String(val);
}
