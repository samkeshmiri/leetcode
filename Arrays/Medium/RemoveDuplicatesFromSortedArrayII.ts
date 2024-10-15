function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  let index = 2;

  for (let i = 2; i < nums.length; i++) {
    const current = nums[i];
    const backTwoPos = nums[index - 2];
    if (current !== backTwoPos) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6]));

// keep the first two numbers without any checks
// for each subsequent number
// if it's the same as the one two positions back, skip it.
// if not, place it in the array.