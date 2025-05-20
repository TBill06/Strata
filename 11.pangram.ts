export function isPangram(input: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const val = input.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (!val.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

// Use of regex and Set to check for unique characters and their count.
// Set gives O(1) time complexity.
// export function isPangram(val: string): boolean {
//   const inputVal = val.toLowerCase().match(/[a-z]/g);
//   const uni = new Set(inputVal);
//   return uni.size === 26;
// }