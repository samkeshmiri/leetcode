/**
 Do not return anything, modify nums1 in-place instead.
 https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pointer = m + n - 1;
  let pointer1 = m - 1;
  let pointer2 = n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer] = nums1[pointer1];
      pointer--;
      pointer1--;
    } else {
      nums1[pointer] = nums2[pointer2];
      pointer--;
      pointer2--;
    }
  }

  while (pointer2 >= 0) {
    nums1[pointer] = nums2[pointer2];
    pointer--;
    pointer2--;
  }
}
