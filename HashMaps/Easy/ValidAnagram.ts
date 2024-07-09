function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map<string, number>();

  // setup map
  for (const letter of s) {
    if (map.get(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  // check valid anagram
  for (const letter of t) {
    if (map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagra", "nagaram"));
