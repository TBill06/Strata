export function hey(message: string) {
  switch (true){
    case (/^[A-Z\s\W]+$/.test(message) && message.endsWith("?")) : return "Calm down, I know what I'm doing!";
    case message.trim().endsWith("?") : return "Sure.";
    case /^\s*$/.test(message) : return "Fine. Be that way!";
    case (/[A-Z]/.test(message) && message.toUpperCase() === message) : return "Whoa, chill out!";
    default : return "Whatever."
  }
}
