// v1.0 Close enough, O(n)
export function encode(val: string): string {
    if (!val) return ''
    let star = val[0]
    let ans = ''
    let count = 1
    for(let i = 1; i < val.length+1; i++) {
        if(val[i] === star) {
            count += 1
        }
        else {
            ans = ans.concat(count != 1 ? `${count}${star}` : `${star}`)
            count = 1
        }
        star = val[i]
    }
    return ans
}

export function decode(val: string): string {
    let ans = ''
    let countStr = ''
    for (let i of val) {
        if (/\d/.test(i)) {
            countStr += i
        } else {
            const count = countStr ? parseInt(countStr) : 1
            ans += i.repeat(count)
            countStr = ''
        }
    }
    return ans
}

// v2.0 one liner decode
export function decodev2(val: string): string {
  return val.replace(/(\d*)(.)/g, (_, count, char) => char.repeat(Number(count) || 1));
}