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

  public plus(minutes: unknown): Clock {

  }

  public minus(minutes: unknown): Clock {
    
  }

  public equals(other: unknown): unknown {

  }
}
