function missingNumberMath(nums: number[]): number {
  const actual = nums.reduce((a, b) => a + b);
  const length = nums.length;
  const supposedTotal = Math.floor((length * (length + 1)) / 2);

  return supposedTotal - actual;
}

function missingNumberIndex(nums: number[]): number {
  for (var i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) return i;
  }

  return 0;
}

console.log(missingNumberMath([3, 0, 1]));
console.log(missingNumberIndex([3, 0, 1]));
