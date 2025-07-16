export function count(line: string): Map<string, number> {
  const map = new Map<string, number>();
  const split = line.toLowerCase().replace(/^'|\s'/g, " ").split(/[&@$%^.,!:?\t\n\s"]+|'(?![a-z])/g).filter(Boolean)
  for(let i=0; i<split.length; i++) {
    if (map.has(split[i])) {
        const count = map.get(split[i])!
        map.set(split[i], count+1)
    }
    else {
        map.set(split[i], 1)
    }
  }
  return map
}