// v1.0 Brute Force - Time Complexity: O(n^2), Data Strucutre used: Plain Object 
export function transform(old: { [key: number]: string[] }): { [key: string]: number } {
  const ans: {[key: string]: number} = {}
  const values = Object.values(old)
  const keys = Object.keys(old)
  for (let i=0; i<values.length; i++) {
    for (let j=0; j<values[i].length; j++) {
      if (values[i][j] in ans) {
        ans[values[i][j].toLowerCase()] += 1
      } else {
        ans[values[i][j].toLowerCase()] = Number(keys[i])
      }
    }
  }
  return ans
}

// v2.0 Still Brute Force - Time Complexity: O(n^2), Data Structure used: Plain Object
export function transform2(old: { [key: number]: string[] }): { [key:   string]: number } {
  const ans: { [key: string]: number } = {}
  for (const [score, letters] of Object.entries(old)) {
    for (const letter of letters) {
    ans[letter.toLowerCase()] = Number(score)
    }
  }
  return ans
}