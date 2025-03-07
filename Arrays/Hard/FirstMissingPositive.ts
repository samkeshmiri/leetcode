// 41. First Missing Positive

// (o(n) time, o(1) space)
function firstMissingPositive(nums: number[]): number {
  let arr = new Array(nums.length + 1).fill(false);

  for (const num of nums) {
    if (num < 0) {
      continue;
    }

    arr[num] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (arr[i] === false) {
      return i;
    }
  }

  return arr.length;
}

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
