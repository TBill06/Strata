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