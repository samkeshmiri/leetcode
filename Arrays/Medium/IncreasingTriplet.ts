function increasingTriplet(nums: number[]): boolean {
  let lowest = nums[0];
  let middle = Infinity;

  for (const num of nums) {
    if (lowest >= num) {
      // when we loop through the array anytime we find a number lower than our lowest, we set it to give ourselves higher chance of finding increasing values
      // first pass means it will set it and 'restart' the trend
      lowest = num;
    } else if (middle >= num) {
      // if the current middle number is greater (we want it to be lower) then we set it to give ourselves higher chance of finding the 3rd value which is higher
      middle = num;
    } else {
      // this third number is greater than lowest and middle, therefore we have found an upward trend
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([2, 4, -2, -3])); // false
