// 704. Binary Search

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const midPoint = left + Math.floor((right - left) / 2);
    if (target == nums[midPoint]) {
      return midPoint;
    }

    if (target < nums[midPoint]) {
      right = midPoint - 1;
    }

    if (target > nums[midPoint]) {
      left = midPoint + 1;
    }
  }

  return -1;
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
// console.log(search([5], 5)); // 0
console.log(search([-1, 0, 3, 5, 9, 12], 13)); // -1
