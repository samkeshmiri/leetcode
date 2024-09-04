function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }

  let startOfRange = nums[0];
  let previous = nums[0];
  const result: string[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] == previous + 1) {
      previous = nums[i];
      continue;
    }

    if (previous == startOfRange) {
      result.push(nums[i - 1].toString());

      startOfRange = nums[i];
      continue;
    }

    const range = startOfRange + "->" + previous;
    result.push(range);
    previous = nums[i];
    startOfRange = nums[i];
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
