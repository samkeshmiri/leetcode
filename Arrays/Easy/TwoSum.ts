function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i]);
    if (index !== undefined) {
      return [index, i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
