// v1.0 Basic implementation of a simple cipher - took a while for the decode!!!
export class SimpleCipher {
  key: string;
  constructor (key?: string) {
    if (key) { this.key = key}
    else this.key = SimpleCipher.randomKey();
  }

  static randomKey(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let rkey: string = ''
    for (let i=0; i<100; i++) {
        rkey += chars[Math.floor(Math.random() * chars.length)] 
    }
    return rkey;
  }

  encode(line: string) {
    let newKey = '';
    for (let i = 0; i < line.length; i++) {
        const push = line.charCodeAt(i)-97;
        const originalKeyValue = this.key.charCodeAt(i%this.key.length)
        if (originalKeyValue + push > 122) {
          newKey += String.fromCharCode((originalKeyValue+push)-26) 
        }
        else {
          newKey += String.fromCharCode((originalKeyValue+push))
        }
    }
    return newKey;
  }

  decode(line: string): string {
    let newKey = '';
    for (let i = 0; i < line.length; i++) {
        const push = this.key.charCodeAt(i%this.key.length)-97
        const originalKeyValue = line.charCodeAt(i)-97;
        if (originalKeyValue - push < 0) {
          newKey += String.fromCharCode((originalKeyValue - push)+123) 
        }
        else {
          newKey += String.fromCharCode((originalKeyValue-push)+97)
        }
    }
    return newKey;
  }
}