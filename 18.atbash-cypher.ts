export function encode(plainText: string): string {
  const rawtext: string[] = plainText.toLowerCase().split('').filter(c => /[a-z0-9]/.test(c));
  let ans: string = '';
  let counter = 1;
  for (const i of rawtext) {
    ans += map(i);
    if (counter%5 == 0 && i !== rawtext[rawtext.length-1]) {
      ans += ' ';
    }
    counter += 1;
  }

  return ans;
}

function map(val: string): string {
  const alpha: string = 'abcdefghijklmnopqrstuvwxyz';
  const index = alpha.indexOf(val);
  return alpha[alpha.length-index-1] ?? val;
}

export function decode(cipherText: string): string {
  const rawtext: string[] = cipherText.split('').filter(c => /[a-z0-9]/.test(c));
  let ans: string = '';
  for (const i of rawtext) {
    ans += map(i);
  }

  return ans;
}
