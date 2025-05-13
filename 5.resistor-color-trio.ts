export function decodedResistorValue(colorArr: string[]): string | undefined {
  const colorMap: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };
  const metrics: string[] = ['', 'kilo', 'mega', 'giga'];

  const base = colorMap[colorArr[0]] * 10 + colorMap[colorArr[1]];
  const multiplier = colorMap[colorArr[2]];
  let value = base * Math.pow(10, multiplier);

  let metricIndex = 0;
  while (value >= 1000) {
    value /= 1000;
    metricIndex++;
  }
  
  if (value === 1) {
    return "1 ohm";
  }
  return `${value} ${metrics[metricIndex]}ohms`;
}