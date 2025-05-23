export class GradeSchool {
  #school: { [key: number]: string[] }

  constructor() {
    this.#school = {}
  }
  roster() {
    const copy: { [key: number]: string[] } = {};
    for (const key in this.#school) {
      copy[key] = [...this.#school[key]];
    }
    return copy;
  }

  add(name:string, grade:number) {
    if(Object.values(this.#school).some(arr=>arr.includes(name))) {
        throw new Error('Student already exists in the roster');
    }
    else {
      if(!this.#school[grade]) {
        this.#school[grade] = []
      }
      this.#school[grade].push(name);
      this.#school[grade].sort();
    }
  }

  grade(grade:number) {
    if (!this.#school[grade]) {
      return []
    }
    let copy: string[] = [];
    for (const item of this.#school[grade])
    {
      copy.push(item);
    }
    return copy;
  }
}
