function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.includes(target)) return 1;

  let startIndex = 0,
    endIndex = 0,
    sum = 0,
    length = Infinity;

  while (endIndex < nums.length) {
    sum += nums[endIndex];

    while (sum >= target) {
      length = endIndex - startIndex + 1;
      sum -= nums[startIndex];
      startIndex++;
    }

    endIndex++;
  }

  return length == Infinity ? 0 : length;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
// console.log(minSubArrayLen(2, [1, 1, 1, 1, 1, 1, 1, 1])); // 2

// console.log(minSubArrayLen(4, [4, 4, 1]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
