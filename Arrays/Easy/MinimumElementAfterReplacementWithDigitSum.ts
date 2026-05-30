function minElement(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let strNum = nums[i];
    let sum = 0;
    for (const num of String(strNum)) {
      sum += Number(num);
    }
    nums[i] = sum;
  }

  return Math.min(...nums);
}

console.log(minElement([10, 11, 12, 13])); // 1
