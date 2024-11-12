function permute(nums: number[]): number[][] {
  let result = [];
  let solution = [];
  let visited = new Array<boolean>(nums.length);

  function backtrack() {
    if (solution.length == nums.length) {
      result.push([...solution]); // spread because we pass the reference otherwise. when we pop on line 17 it would remove the value in the solution array in result array.
      return result;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        // need to track because we do not want to reuse a number
        continue;
      }

      solution.push(nums[i]);
      visited[i] = true;
      backtrack();
      solution.pop();
      visited[i] = false;
    }
  }

  backtrack();
  return result;
}

console.log(permute([1, 2, 3]));
