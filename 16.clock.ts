export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minute?: number) {
    this.hour = hour;
    this.minute = minute ?? 0;
  }

  private convert(hour: number, min: number): {hourVal: number, minVal: number} {
    const minsToHour = Math.floor(min/60);
    let minVal = min%60;
    let hourVal = (hour + minsToHour)%24;
    if (hourVal < 0) {
      hourVal += 24;
    }
    if (minVal < 0) {
      minVal += 60;
    }
    return { hourVal, minVal }
  }

  public toString(): string {
    const { hourVal, minVal } = this.convert(this.hour, this.minute);
    return `${hourVal.toString().padStart(2,'0')}:${minVal.toString().padStart(2,'0')}`
  }

  public plus(minutes: number): Clock {
    const { hourVal, minVal } = this.convert(this.hour, this.minute + minutes);
    return new Clock(hourVal, minVal);
  }

  public minus(minutes: number): Clock {
    const { hourVal, minVal } = this.convert(this.hour, this.minute - minutes);
    return new Clock(hourVal, minVal);
  }

  public equals(other: Clock): boolean {
    const val = this.convert(other.hour, other.minute);
    const val2 = this.convert(this.hour, this.minute);
    
    return val.hourVal === val2.hourVal && val.minVal === val2.minVal;
  }
}

// Better Method
  // private convert(hour: number, minute: number): { hourVal: number, minVal: number } {
  //   let total = (hour * 60 + minute) % (24 * 60);
  //   if (total < 0) total += 24 * 60;
  //   const hourVal = Math.floor(total / 60);
  //   const minVal = total % 60;
  //   return { hourVal, minVal };
  // }