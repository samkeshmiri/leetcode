// 55. Jump Game

function canJump(nums: number[]): boolean {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      // index is unreachable
      return false;
    }

    farthest = Math.max(farthest, i + nums[i]);

    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

// greedy solution
function canJumpGreedy(nums: number[]): boolean {
  let goalPostIndex = nums.length - 1;

  // go in reverse and move the goalpost. if the previous index can get us to the current goalpost
  for (let i = nums.length - 1; i >= 0; i--) {
    // can the current index and value take me past the goalpost?
    if (i + nums[i] >= goalPostIndex) {
      // yes, so the goalpost comes closer to the start
      goalPostIndex = i;
    }
  }

  return goalPostIndex === 0;
}

canJumpGreedy;

// console.log(canJump([2, 3, 1, 1, 4])); // true;
// console.log(canJump([3, 2, 1, 0, 4])); // false;
console.log(canJumpGreedy([3, 2, 1, 0, 4])); // false;
// console.log(canJumpGreedy([2, 3, 1, 1, 4])); // true;
// console.log(canJump([2, 0])); // true
// console.log(canJump([2, 5, 0, 0])); // true
