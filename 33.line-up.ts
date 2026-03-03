// v1.0 Brute force String path
// String allocated extra memory, Math is O(1) space
// Redundant return statements
// Always handle the exception first, then the general cases
export function format(name: string, number: number): string {
    let end = String(number).split("")
    let endval = end[end.length - 1];
    let preVal;
    if (number > 9) {
       preVal = end[end.length -2];
    }
    switch (endval) {
        case ("1"):
            if (preVal == "1") {
                return `${name}, you are the ${number}th customer we serve today. Thank you!`
            }
            else {
                return `${name}, you are the ${number}st customer we serve today. Thank you!`
            }
        case "2":
            if (preVal == "1") {
                return `${name}, you are the ${number}th customer we serve today. Thank you!`
            }
            else {
                return `${name}, you are the ${number}nd customer we serve today. Thank you!`
            }
        case "3":
            if (preVal == "1") {
                return `${name}, you are the ${number}th customer we serve today. Thank you!`
            }
            else {
                return `${name}, you are the ${number}rd customer we serve today. Thank you!`
            }
        default:
            return `${name}, you are the ${number}th customer we serve today. Thank you!`
    }
}

// v2.0 Better solution
// Used Math only
// O(1) space, O(1) time
export function formatv2(name: string, number: number): string {
    let suffix = "";
    let lastTwoDigits = number%100
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        suffix = "th";
    }
    else {
        let lastDigit = number%10
        switch(lastDigit) {
            case 1:
                suffix = "st";
                break;
            case 2:
                suffix = "nd";
                break;
            case 3:
                suffix = "rd";
                break;
            default:
                suffix = "th";
        }
    }
    return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
}

// v3.0 Cleaner v2 with not reassignment of suffix variable
export function formatv3(name: string, number: number): string {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  const suffix =
    lastTwoDigits >= 11 && lastTwoDigits <=13
    ? "th"
    : lastDigit === 1
    ? "st"
    : lastDigit === 2
    ? "nd"
    : lastDigit === 3
    ? "rd"
    : "th";
  
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}


// v4.0 One-liner
export function formatv4(name: string, number: number): string {
  const suffix =
    number % 100 >= 11 && number % 100 <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][number % 10] ?? "th";

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}