function searchInsert(nums: number[], target: number): number {
  return search(nums, target, 0, nums.length - 1);
}

function search(
  nums: number[],
  target: number,
  startIndex: number,
  endIndex: number
): number {
  if (startIndex > endIndex) {
    return startIndex;
  }

  const currentIndex = Math.floor((startIndex + endIndex) / 2);

  if (nums[currentIndex] === target) {
    return currentIndex;
  }

  if (nums[currentIndex] > target) {
    return search(nums, target, startIndex, currentIndex - 1);
  } else {
    return search(nums, target, currentIndex + 1, endIndex);
  }
}

console.log(searchInsert([1, 2, 3], 4));
