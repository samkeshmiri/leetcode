// o(n) time
// o(n) space
function climbStairs(n: number): number {
  if (n <= 1) return 1;

  const arr = new Array(n).fill(-1);

  function climbStairsHelper(n: number): number {
    if (n <= 1) return 1;

    if (arr[n] !== -1) {
      return arr[n];
    }

    arr[n] = climbStairsHelper(n - 1) + climbStairsHelper(n - 2);
    return arr[n];
  }

  return climbStairsHelper(n - 1) + climbStairsHelper(n - 2);
}

console.log(climbStairs(3));

// o(n) time
// o(1) space
function climbStairsO1Space(n: number): number {
  if (n <= 1) return 1;
  let firstNum = 1,
    secondNum = 1,
    thirdNum = 0;
  for (let i = 2; i <= n; i++) {
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return thirdNum;
}

console.log(climbStairsO1Space(3));
