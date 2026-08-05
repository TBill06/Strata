// v.1.0 Basic noob version
// I realized this is O(n^2) because includes function on an array is O(n) and I am calling it in a loop
export function isIsogramv1(word: string): boolean {
    let val: string[] = []
    word = word.toLowerCase()
    for (let i of word) {
        if ((i != '-' && i != ' ') && val.includes(i)) {
            return false
        }
        else {
            val.push(i)
        }
    }
    return true
}

// v.2.0 Use Set to reduce time complexity to O(n)
// Set uses has table intetnally so it is O(1) to check if a value exists in the set
export function isIsogramv2(word: string): boolean {
    word = word.toLowerCase()
    let val: Set<string> = new Set()
    for (let i of word) {
        if ((i != '-' && i != ' ') && val.has(i)) {
            return false
        }
        else {
            val.add(i)
        }
    }
    return true
}

// v.3.0 JS trick
// Making the word into a set will already remove duplicates
export function isIsogram(word: string): boolean {
    word = word.toLowerCase().replace(/[\s-]/g, '')
    return new Set(word).size === word.length
}