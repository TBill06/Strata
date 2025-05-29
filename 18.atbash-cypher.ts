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

// v2.0 Better OOPS ig!!!
export function encodev2(plainText: string): string {
  let ans = mapv2(plainText);
  let parts = ans.match(/.{1,5}/g);
  let result = parts ? parts.join(' ') : '';

  return result;
}

function mapv2(val: string): string {
  const rawtext: string[] = val.toLowerCase().split('').filter(c => /[a-z0-9]/.test(c));
  let ans: string = '';
  const alpha: string = 'abcdefghijklmnopqrstuvwxyz';

  for (const i of rawtext) {
    const index = alpha.indexOf(i);
    const rev = alpha[alpha.length-index-1] ?? i;
    ans += rev;
  }

  return ans;
}

export function decodev2(cipherText: string): string {
  const ans = mapv2(cipherText);

  return ans;
}