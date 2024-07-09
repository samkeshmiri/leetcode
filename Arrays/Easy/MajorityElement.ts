function majorityElement(nums: number[]): number {
  let count = 1;
  let candidate = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (candidate == nums[i]) {
      count++;
      continue;
    }

    if (count == 0) {
      candidate = nums[i];
      continue;
    }

    count--;
  }
  return candidate;
}

console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
