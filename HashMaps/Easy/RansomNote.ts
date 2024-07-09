function canConstruct(ransomNote: string, magazine: string): boolean {
  let map = new Map<string, number>();

  for (const char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
      // map.set(char, map.get(char)! + 1 || 1) no need for else with this
    } else {
      map.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (map.has(char)) {
      if (map.get(char)! <= 0) {
        return false;
      }
      map.set(char, map.get(char)! + 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(canConstruct("a", "b"));
