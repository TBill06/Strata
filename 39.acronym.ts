// Raw Problem Solving Solution
// I know regex is the way to go
// Handles PascalCase not just 1 split but multiple splits
export function parse(phrase: string): string {
    const a = phrase.split(' ')
    let words: string[] = []
    let answer: string = ""
    a.forEach(val => {
        let pos: number = 0
        let nums: number[] = []
        if (!val.includes('-')) {
            for (let i=1; i<val.length; i++) {
                if ((val[i] === val[i].toUpperCase()) && (val[i].charCodeAt(0) >=65 && val[i].charCodeAt(0)<=90)) {
                    if (!(val[i-1] === val[i-1].toUpperCase())) {
                        words.push(val.slice(pos,i))
                        pos = i
                        nums.push(i)
                    }
                }
                if (i==val.length-1) {
                    words.push(val.slice(pos))
                }
            }
        }
        else {
            for (let i of val.split('-')) {
                words.push(i)
            }
        }
    })
    words.forEach(val => {
        answer += val[0].toUpperCase()
    })
    return answer
}

// Regex Baby
export function parsev2(phrase: string): string {
    return phrase
        .replace('-', ' ')                    // Replace hyphens with spaces
        .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space before capital letters
        .replace(/[^a-zA-Z\s]/g, '')          // Remove non-alphabetic characters
        .split(' ')                           // Split into words
        .map(word => word[0].toUpperCase())   // Take the first letter of each word and capitalize it
        .join('');                            // Join the letters to form the acronym
}