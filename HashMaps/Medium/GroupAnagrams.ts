function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) {
    return [[""]];
  }

  if (strs.length === 1) {
    return [[...strs]];
  }

  let map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split("").sort().join("");

    if (map.get(sortedWord)) {
      const value = map.get(sortedWord);
      value.push(strs[i]);
      map.set(sortedWord, value);
    } else {
      map.set(sortedWord, [strs[i]]);
    }
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
