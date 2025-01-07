// 238. Product of Array Except Self

function productExceptSelf(nums: number[]): number[] {
  let answerArr = new Array(nums.length).fill(0); // answer arr
  let totalProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    answerArr[i] = totalProduct;
    totalProduct *= nums[i];
  }

  totalProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answerArr[i] = totalProduct * answerArr[i];
    totalProduct *= nums[i];
  }

  return answerArr;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
