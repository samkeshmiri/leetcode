// 35. Search Insert Position

function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length;

  while (low <= high) {
    const midPoint = low + Math.floor((high - low) / 2);
    if (target === nums[midPoint]) {
      return midPoint;
    }

    if (target > nums[midPoint]) {
      low = midPoint + 1;
    } else {
      high = midPoint - 1;
    }
  }

  return low; // because low is now greater than high
}

console.log(searchInsert([1, 2, 4], 3)); // 3
