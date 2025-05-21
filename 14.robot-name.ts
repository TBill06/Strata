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

// To pass the last test, v2.0
// export class Robot {
//   #nameVal: string;
//   static usedNames = new Set<string>();
//   static namePool: string[] = [];
  
//   constructor() {
//     if (Robot.namePool.length === 0) {
//       this.#generateNamePool();
//     }
//     this.#nameVal = this.#getName();
//     Robot.usedNames.add(this.#nameVal);
//   }

//   #generateNamePool(): void {
//     if (Robot.namePool.length === 0) {
//       for (let i = 65; i <= 90; i++) {
//         for (let j = 65; j <= 90; j++) {
//           for (let d1 = 0; d1 <= 9; d1++) {
//             for (let d2 = 0; d2 <= 9; d2++) {
//               for (let d3 = 0; d3 <= 9; d3++) {
//                 const name = String.fromCharCode(i) + 
//                              String.fromCharCode(j) + 
//                              d1 + d2 + d3;
//                 Robot.namePool.push(name);
//               }
//             }
//           }
//         }
//       }
//       this.#shuffleArray(Robot.namePool);
//     }
//   }

//   #shuffleArray(array: string[]): void {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   #getName(): string {
//     return Robot.namePool.pop()!;
//   }

//   public get name(): string {
//     return this.#nameVal;
//   }

//   public resetName(): void {
//     Robot.usedNames.delete(this.#nameVal);
//     this.#nameVal = this.#getName();
//     Robot.usedNames.add(this.#nameVal);
//   }

//   public static releaseNames(): void {
//     Robot.usedNames.clear();
//     Robot.namePool = [];
//   }
// }