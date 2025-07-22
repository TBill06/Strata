// v1.0 Brute force solution
export function reverse(word: string): string {
  let ans = ''
  for (let i =word.length-1; i >= 0; i--) {
    ans += word[i]
  }
  return ans
}

// v2.0 Using built-in methods
export function reversev2(word: string): string {
  return word.split('').reverse().join('')
}