// v1.0 Triangle class to determine triangle types
// Added checks for triangle inequality and zero sides
// Refactored to use a constructor and getters for triangle types
export class Triangle {
  sides: number[];
  constructor(...sides: number[]) {
    this.sides = sides;
  }

  private isTriangle(): boolean {
    if (
      this.sides.includes(0) ||
      this.sides[0] + this.sides[1] < this.sides[2] ||
      this.sides[1] + this.sides[2] < this.sides[0] ||
      this.sides[0] + this.sides[2] < this.sides[1]
    ) { return false; }
    return true;
  }

  get isEquilateral(): boolean {
    if (!this.isTriangle()) { return false; }
    return this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[1] === this.sides[2];
  }

  get isIsosceles(): boolean {
    if (!this.isTriangle()) { return false; }
    return this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2];
  }

  get isScalene(): boolean {
    if (this.isTriangle() && !this.isEquilateral && !this.isIsosceles) { return true; }
    return false;
  }
}