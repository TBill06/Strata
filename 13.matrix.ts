export class Matrix {
  matrix: number[][];
  constructor(matrix: string) {
    let arrStr = matrix.split("\n");
    this.matrix = arrStr.map(str => str.split(' ').map(Number));
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    return this.matrix[0].map((_,colIndex) => this.matrix.map(row => row[colIndex]));
  }
}