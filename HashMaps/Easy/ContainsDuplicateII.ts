function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
