// v1 First try
// Had to play with the types cause tests had both numbers and BigInts
export function isArmstrongNumberv2(number: number | bigint): boolean {
    let i = BigInt(0)
    number.toString().split('').forEach((val: string) => {i += BigInt(val) ** BigInt(number.toString().length)})
    return (i === BigInt(number)) ? true : false
}

// Rewriting v1 to remove redundancy and calling number.toString inside a loop
export function isArmstrongNumber(number: number | bigint): boolean {
    let i = BigInt(0)
    const numStr = number.toString()
    const pow = numStr.length
    numStr.split('').forEach((val: string) => {i += BigInt(val) ** BigInt(pow)})
    return i === BigInt(number)
}

// v3 Using reduce
export function isArmstrongNumberv3(number: number | bigint): boolean {
    const numStr = number.toString()
    const sum = numStr.split('').reduce((acc, val) => acc + BigInt(val) ** BigInt(numStr.length), BigInt(0))
    return sum === BigInt(number)
}