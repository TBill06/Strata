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
      for (const [grade, names] of Object.entries(this.#school)) {
        if (names.includes(name)) {
          const index = this.#school[Number(grade)].indexOf(name);
          if (index !== -1) this.#school[Number(grade)].splice(index, 1);
          break;
        }
      }
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
