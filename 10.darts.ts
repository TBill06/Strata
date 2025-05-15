export function score(x: number, y: number): number {
  const val:number = x**2 + y**2
  if (val <= 1) return 10;
  if (val <= 25) return 5;
  if (val <= 100) return 1;
  return 0;
}

// Ternary operator = condition ? true : false
// export function score(x: number, y: number): number {
// const val:number = x**2 + y**2
// return val <= 1 ? 10 : 
//        val <= 25 ? 5 : 
//        val <= 100 ? 1 : 0;
// }