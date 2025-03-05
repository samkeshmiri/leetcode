function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // O(nlogn)

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // we cannot have duplicates so need cannot have l = r
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // move left and right to skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(JSON.stringify(threeSum([-2, -2, -2, 0, 1, 1, 1, 2, 2, 2])));
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
