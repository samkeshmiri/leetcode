// 2770. Maximum Number of Jumps to Reach the Last Index

function maximumJumps(nums: number[], target: number): number {
  const n = nums.length;

  // dp[i] = max jumps needed to reach index i from index 0.
  // -1 means index i is not reachable yet.
  const dp = Array(n).fill(-1);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    // Check every previous index because jumps can skip any number of positions.
    for (let j = 0; j < i; j++) {
      // We can jump from j to i only if j is reachable
      // and the values are within the target difference
      if (dp[j] !== -1 && Math.abs(nums[i] - nums[j]) <= target) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[n - 1];
}

console.log(maximumJumps([1, 3, 6, 4, 1, 2], 2)); // 3
