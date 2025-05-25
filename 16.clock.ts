export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minute?: number) {
    this.hour = hour;
    this.minute = minute ?? 0;
  }

  public toString(): unknown {
    const minsToHour = Math.floor(this.minute/60);
    const minsVal = this.minute%60;
    const hoursVal = (this.hour + minsToHour)%24;
    return `${hoursVal.toString().padStart(2,'0')}:${minsVal.toString().padStart(2,'0')}`
  }

  public plus(minutes: number): Clock {
    const newMinute = this.minute + minutes;
    const newHour = this.hour + Math.floor(newMinute/60);
    return new Clock(newHour%24, newMinute%60);
  }

  public minus(minutes: number): Clock {
    const newMinute = this.minute - minutes;
    const newHour = this.hour - Math.floor(newMinute/60);
    return new Clock((newHour + 24)%24, (newMinute + 60)%60);
  }

  public equals(other: Clock): boolean {
    if (other instanceof Clock) {
      return this.hour === other.hour && this.minute === other.minute;
    }
    return false;
  }
}
