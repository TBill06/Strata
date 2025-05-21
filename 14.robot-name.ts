export class Robot {
  #nameVal: string;
  static usedNames = new Set();

  constructor() {
    this.#nameVal = this.#randomName();
    Robot.usedNames.add(this.#nameVal);
  }

  #randomName(): string {
    let val: string = '';
    for (let i=0; i < 2; i++) {
      val += String.fromCharCode(Math.floor(Math.random() * 26)+65);
    }
    for (let i=0; i < 3; i++) {
      val += String.fromCharCode(Math.floor(Math.random() * 10)+48);
    }
    if (Robot.usedNames.has(val)) {
      return this.#randomName();
    }
    return val;
  }

  public get name(): string {
    return this.#nameVal
  }

  public resetName(): void {
    this.#nameVal = this.#randomName();
    Robot.usedNames.add(this.#nameVal);
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}