export class DnDCharacter {
  strength!: number;
  dexterity!: number;
  constitution!: number;
  intelligence!: number;
  wisdom!: number;
  charisma!: number;
  hitpoints!: number;

  constructor() {
    const props = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'] as const;
    for (const prop of props) {
      this[prop] = DnDCharacter.generateAbilityScore();
    }
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  private static rollDice = (count = 4): number[] => {
    const arr = Array.from({length: count}, () => Math.floor(Math.random() * 6)+1);
    return arr;
  }

  public static generateAbilityScore(): number {
    const valArr = this.rollDice();
    return valArr.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2);
  }
}

// Static methods can be called wihthout creating an instance of the class
// Non-static methods can only be called on an instance of the class
// Static methods can call other static methods only, so private's gotta be static