function isIsomorphic(s: string, t: string): boolean {
  let map = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (Array.from(map.values()).includes(t[i])) {
        return false;
      } else {
        map.set(s[i], t[i]);
      }
    }
  }
  return true;
}

// console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
// console.log(isIsomorphic("foo", "bar")); // false
// console.log(isIsomorphic("egg", "add")); // true
