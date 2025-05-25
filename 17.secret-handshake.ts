export function commands(val: number): string[] {
  const arr:string[] = ['','jump','close your eyes','double blink','wink'];
    const bin = val.toString(2);
    let ans:string[] = [];
    let counter:number = bin.length-1;
    let ticker:number = -1;
    while (counter >=0) {
        const digit = bin[counter];
        if (digit === '1') {
            if (ticker === -5) {
                ans = ans.slice().reverse();
            }
            else {
                ans.push(arr[arr.length + ticker]);
            }
        }
        counter--;
        ticker--;
    }
    return ans;
}

// v2.0 - Bitwise Operators
// & is a bitwise AND operator
// (1 << i) shifts the number 1 to the left by i bits
// 1 << 0 = 00001
// 1 << 1 = 00010
// 1 << 2 = 00100
// 1 << 3 = 01000
// 1 << 4 = 10000
// export function commands(val: number): string[] {
//   const arr = ["wink", "double blink", "close your eyes", "jump"];
//   const result: string[] = [];

//   for (let i=0; i < arr.length; i++) {
//     if (val & (1 << i)) {
//       result.push(arr[i]);
//     }
//   }
//   if (val & 16) {
//     result.reverse();
//   }
  
//   return result;
// }