// v1.0 Binary is better than linear search as tis is O(log n) vs O(n).
export function squareRoot(radicand: number): number {
  let ans = 1;
  let left = 1;
  let right = radicand;
  while (left <= right) {
    const mid = (left+right)/2 | 0;
    if (mid*mid == radicand) {
        return mid;
    }
    else if (mid*mid > radicand) {
        right = mid - 1;
    }
    else if (mid*mid < radicand) {
        left = mid + 1;
    }
  }
  return ans;
}

// v2.0 Newton's method:
export function squareRootV2(radicand: number): number {
  let x = radicand >> 1;
  if (x === 0) return radicand;

  while ((x * x - radicand > 0.00001) || (radicand - x * x > 0.00001)) {
    x = 0.5 * (x + radicand / x);
  }

  const result = x | 0;
  if (result * result === radicand) {
    return result;
  } else {
    throw new Error("Not a perfect square");
  }
}
