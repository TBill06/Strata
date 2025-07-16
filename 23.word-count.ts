export function count(line: string): Map<string, number> {
  const map = new Map<string, number>();
  const split = line.toLowerCase().replace(/^'|\s'/g, " ").split(/[&@$%^.,!:?\t\n\s"]+|'(?![a-z])/g).filter(Boolean)
  for (const word of split) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  return map
}