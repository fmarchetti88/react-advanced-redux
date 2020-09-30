export function factorial(num: number): number {
  let result = 1;
  for (var i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

export function factorialRecursive(num: number): number {
  return num === 0 ? 1 : num * factorialRecursive(num - 1);
}

export function factorialMemo(num: number): number {
  var cachedResults: any = null;
  if (!cachedResults) {
    cachedResults = {};
  }

  let factorial: number = cachedResults[num];
  if (!factorial) {
    if (num === 0) {
      cachedResults[num] = 0;
    } else if (num === 1) {
      cachedResults[num] = 1;
    } else {
      cachedResults[num] = factorialMemo(num - 1) * factorialMemo(num - 2);
    }
  }
  return cachedResults[num];
}
