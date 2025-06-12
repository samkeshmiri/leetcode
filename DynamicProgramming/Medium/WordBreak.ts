// 139. Word Break

function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);

  dp[0] = true; // empty string is valid

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const substring = s.substring(i, j);
      if (dp[j] && wordSet.has(substring)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"]));
