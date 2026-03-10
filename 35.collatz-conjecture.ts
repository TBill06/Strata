// v.1.0 Pretty fast and easy ahh solution
export function steps(count: number): number {
    if (count <= 0 || !Number.isInteger(count)) throw new Error("Only positive integers are allowed")
    let ticker = 0
    while (count != 1) {
        // if ((count & 1) === 0) is a bitwise AND operation that checks if the number is even. better than modulo
        if (count % 2 == 0) {
            count /= 2
        }
        else {
            count = (count * 3) + 1
        }
        ticker += 1
    }
    return ticker
}

// v.2.0 A more concise and functional approach using recursion
export function stepsv2(count: number): number {
    if (count <=0 || !Number.isInteger(count)) throw new Error("Only positive integers are allowed")
    return count === 1? 0 : 1 + stepsv2(count % 2 === 0 ? count / 2 : (count * 3) + 1) 
}