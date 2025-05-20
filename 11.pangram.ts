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