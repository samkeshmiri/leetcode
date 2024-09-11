/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  let l = 0,
    temp = 0,
    r = nums.length - 1;

  while (l < r) {
    temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    r--, l++;
  }

  l = 0;
  temp = 0;
  r = k - 1;
  while (l < r) {
    temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    r--, l++;
  }

  l = k;
  temp = 0;
  r = nums.length - 1;
  while (l < r) {
    temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    r--, l++;
  }

  console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
