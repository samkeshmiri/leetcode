// 88. Merge Sorted Array

package Arrays.Easy;

public class MergeSortedArray {
    static class Solution {

        public void merge(int[] nums1, int m, int[] nums2, int n) {
            int pointer = nums1.length - 1;
            int pointer1 = m - 1;
            int pointer2 = n - 1;

            while (pointer1 >= 0 && pointer2 >= 0) {
                if (nums1[pointer1] > nums2[pointer2]) {
                    nums1[pointer] = nums1[pointer1];
                    pointer1--;
                } else {
                    nums1[pointer] = nums2[pointer2];
                }
                pointer--;
            }

            while (pointer2 >= 0) {
                nums1[pointer] = nums2[pointer2];
                pointer--;
                pointer2--;
            }
        }

        public static void main(String[] args) {
            // int[] nums1 = { 1, 2, 3, 0, 0, 0 };
            // int[] nums2 = { 2, 5, 6 };
            // new Solution().merge(nums1, 3, nums2, 3);

            int[] nums1 = { 0 };
            int[] nums2 = { 1 };
            new Solution().merge(nums1, 0, nums2, 1);

            System.out.println(java.util.Arrays.toString(nums1));
        }
    }
}