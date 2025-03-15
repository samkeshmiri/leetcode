// 39. Combination Sum

function combinationSum(candidates: number[], target: number): number[][] {
  const results = [];
  const currentNums = [];
  let currentSum = 0;

  function backtrack(index: number) {
    if (currentSum === target) {
      results.push([...currentNums]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (currentSum + candidates[i] <= target) {
        currentNums.push(candidates[i]);
        currentSum += candidates[i];
        backtrack(i);
        currentSum -= candidates[i];
        currentNums.pop();
      }
    }
  }

  backtrack(0);
  return results;
}

console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
