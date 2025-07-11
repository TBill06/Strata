export const answer = (prompt: string) => {
    let each = prompt.match(/plus|minus|multiplied by|divided by|-?\d+/g) ?? [];
    if (prompt == "What is?") {
        throw new Error("Syntax error");
    }
    if("What is ".concat(each.join(' ').concat("?")) != prompt) {
        throw new Error("Unknown operation");
    }
    let valid: any[] = []
    for (let i=0; i < each.length; i++)
    {
        if(each[i].includes("plus")) {
            valid.push("+")
        }
        else if(each[i].includes("minus")) {
            valid.push("-")
        }
        else if(each[i].includes("multiplied by")) {
            valid.push("*")
        }
        else if(each[i].includes("divided by")) {
            valid.push("/")
        }
        else {
            valid.push(Number(each[i]));
        }
    }
    if (valid.length == 0) {
      throw new Error("Unknown operation");
    }
    let answer = 0;
    if(typeof(valid[0]) == "number") {
        answer = valid[0];
        for (let i=0; i < valid.length; i++)
        {
            if (typeof(valid[i]) == "number") {
                if(typeof(valid[i+1]) == "number") {
                    throw new Error("Syntax error");
                }
            }
            else if (typeof(valid[i]) == "string") {
                if(valid[i+1] != null && typeof(valid[i+1]) != "string") {
                    switch (valid[i]) {
                        case "+":
                            answer += valid[i+1];
                            break;
                        case "-":
                            answer -= valid[i+1];
                            break;
                        case "*":
                            answer *= valid[i+1];
                            break;
                        case "/":
                            answer /= valid[i+1];
                            break;
                    }
                }
                else {
                    throw new Error("Syntax error")
                }
            }
        }
        return answer;
    }
    else {
        throw new Error("Syntax error");
    }
}

// v2.0 cleaner and uses ops map for operations
// export const answer = (prompt: string): number => {
//   if (!prompt.startsWith("What is")) {
//     throw new Error("Unknown operation");
//   }

//   if (!prompt.endsWith("?")) {
//     throw new Error("Syntax error");
//   }

//   const match = prompt.match(/-?\d+|plus|minus|multiplied by|divided by/g);

//   if (!match || match.length === 0) {
//     throw new Error("Syntax error");
//   }

//   // Detect unsupported words (i.e., anything not matched by regex)
//   const unsupported = prompt
//     .replace(/^What is/, "")
//     .replace(/\?$/, "")
//     .trim()
//     .replace(/-?\d+|plus|minus|multiplied by|divided by/g, "")
//     .trim();

//   if (unsupported.length > 0) {
//     throw new Error("Unknown operation");
//   }

//   const ops: { [key: string]: (a: number, b: number) => number } = {
//     "plus": (a, b) => a + b,
//     "minus": (a, b) => a - b,
//     "multiplied by": (a, b) => a * b,
//     "divided by": (a, b) => a / b
//   };

//   let current = Number(match[0]);

//   for (let i = 1; i < match.length; i += 2) {
//     const op = match[i];
//     const next = Number(match[i + 1]);

//     if (!ops[op] || isNaN(next)) {
//       throw new Error("Syntax error");
//     }

//     current = ops[op](current, next);
//   }

//   return current;
// };
