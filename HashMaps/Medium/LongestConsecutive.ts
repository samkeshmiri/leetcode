function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let highestCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] - 1)) {
      continue;
    }

    let count = 0;
    //   sequence = 1;
    while (set.has(nums[i]++)) {
      count++;
      //   sequence++;
    }

    highestCount = Math.max(count, highestCount);
  }

  return highestCount;
}

// console.log(longestConsecutive([1, 2, 3]));
console.log(longestConsecutive([0, 0, -1]));
