function wordPattern(pattern: string, s: string): boolean {
  let map = new Map<string, string>();

  const arr = s.split(" ");
  if (pattern.split("").length !== arr.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      if (map.get(arr[i]) === pattern[i]) {
        continue;
      } else {
        return false;
      }
    }
    if (Array.from(map.values()).includes(pattern[i])) {
      return false;
    }
    map.set(arr[i], pattern[i]);
  }

  return true;
}

// console.log(wordPattern("abba", "dog cat cat dog")); // true
// console.log(wordPattern("aaaa", "dog cat cat dog")); // false
// console.log(wordPattern("aaaa", "dog cat cat dog")); // false
// console.log(wordPattern("abba", "dog cat cat fish"))' // false
console.log(wordPattern("jquery", "jquery")); // false
