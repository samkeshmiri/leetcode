//     Start with the First String: Assume the entire first string in the array is the longest common prefix.
// Iterate Over the Strings: Loop through the rest of the strings in the array.
// Compare and Shorten the Prefix: In each iteration, compare the current prefix with the current string. If the current string doesn't start with the prefix, shorten the prefix by removing the last character.
//    Repeat this process until the string starts with the prefix or the prefix becomes empty.
// Return the Result: After iterating through all strings, the prefix you're left with is the longest common prefix. If the prefix is empty, return an empty string.
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let candidatePrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (candidatePrefix == strs[i]) {
      continue;
    }

    while (!strs[i].startsWith(candidatePrefix)) {
      candidatePrefix = candidatePrefix.slice(0, candidatePrefix.length - 1);
    }
  }

  return candidatePrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
