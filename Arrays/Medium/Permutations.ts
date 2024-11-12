function permute(nums: number[]): number[][] {
  let result = [];
  let solution = [];

  function backtrack() {
    if (solution.length == nums.length) {
      result.push([...solution]); // spread because we pass the reference otherwise. when we pop on line 17 it would remove the value in the solution array in result array.
      return result;
    }

    for (const num of nums) {
      if (solution.includes(num)) {
        continue;
      }
      solution.push(num);
      backtrack();
      solution.pop();
    }
  }

  backtrack();
  return result;
}

console.log(permute([1, 2, 3]));
