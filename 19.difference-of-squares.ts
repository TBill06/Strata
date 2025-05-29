export class Squares {
  private num: number;
  constructor(count: number) {
    this.num = count;
  }

  get sumOfSquares(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.num; i++) {
      sum += i**2;
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.num; i++) {
      sum += i;
    }
    return sum**2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
