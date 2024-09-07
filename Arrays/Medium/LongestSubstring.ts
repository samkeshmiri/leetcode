// o(n^2) because we create and iterate over a new substring on each iteration
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;

  let startIndex = 0,
    endIndex = 0,
    length = 0;

  while (endIndex <= s.length) {
    let word = s.slice(startIndex, endIndex);

    if (isUnique(word)) {
      length = Math.max(length, word.length);
      endIndex++;
    } else {
      startIndex++;
    }
  }

  return length;

  function isUnique(str: string): boolean {
    return new Set(str).size === str.length;
  }
}

// o(n) because we iterate on one set
// avoid overhead of creating and checking new sets or substrings on each iteration
function lengthOfLongestSubstringOn(s: string): number {
  if (!s.length) return 0;

  let left = 0,
    length = 0,
    set: Set<string> = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    length = Math.max(set.size, length);
  }

  return length;
}

// console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstringOn("abcabcbb"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
