function jump(nums: number[]): number {
  let farthest = 0; // track farthest index we can reach so far
  let jumps = 0; // number of jumps to reach the end
  let currentEnd = 0; // end of the current jump

  // once you reach or surpass last index, you don't need to do another jump
  // hench < length - 1
  for (let i = 0; i < nums.length - 1; i++) {
    // update to the max index we can reach from i
    farthest = Math.max(farthest, i + nums[i]);

    // if we reach end of current jump
    // we need to jump again to progress
    if (i == currentEnd) {
      jumps++;
      currentEnd = farthest; // jump to the farthest we can reach from the current jump
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
// console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3])); // 2
