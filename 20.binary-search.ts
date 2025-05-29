export function find(haystack: number[], needle: number): number | never  {
  const arr: number[] = haystack.sort((a,b) => a-b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === needle) {
      return mid;
    }
    else if (arr[mid] < needle) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }

  throw new Error("Value not in array");
}

// Normal sort() does not do ascending numerically, it does lexicographically.
// This is why we sort the array before doing binary search. (a,b) => a-b. how this works:
// - If a < b, it returns a negative number, which means a comes before b.
// - If a > b, it returns a positive number, which means a comes after b.
// - If a === b, it returns 0, which means a and b are equal.
// and (a,b) means we are comparing two elements in the array and it will look at each element in the array.