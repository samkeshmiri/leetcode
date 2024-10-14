function increasingTriplet(nums: number[]): boolean {
  let lowest = nums[0];
  let middle = Infinity;

  for (const num of nums) {
    if (lowest >= num) {
      // first pass means it will set it and 'restart' the trend
      lowest = num;
    } else if (middle >= num) {
      // whenever it is higher, set it
      middle = num;
    } else {
      // this third number is increasing, therefore we have found an upward trend
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([2, 4, -2, -3])); // false
