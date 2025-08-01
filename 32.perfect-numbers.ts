// v1.0 Basic Loop
export function classify(num: number): string {
  if (num <= 0) throw new Error("Classification is only possible for natural numbers.");
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  if (sum === num) return 'perfect';
  if (sum > num) return 'abundant';
  return 'deficient';
}

// v2.0 better solution
export function classifyv2(num: number): string {
  if (num <= 0) throw new Error("Classification is only possible for natural numbers.");
  let sum: number = 0;
  const limit: number = Math.sqrt(num);
  
  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== 1 && i !== num / i) {
        sum += num / i;
      }
    }
  }
  
  sum -= num; // Exclude the number itself
  
  if (sum === num) return 'perfect';
  if (sum > num) return 'abundant';
  return 'deficient';
}