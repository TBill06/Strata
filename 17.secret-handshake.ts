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
