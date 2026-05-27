function numberOfSpecialChars(word: string): number {
  // if 1 = first time seeing a lowercase
  // if 2 = uppercase after lowercase (good)
  // if 3 = lowercase appearing after upper case or uppercase appeared first (cannot have lowercase after)
  let map = new Map<string, number>();

  for (const char of word) {
    const lowerCaseChar = char.toLowerCase();
    if (char === lowerCaseChar) {
      if (map.has(lowerCaseChar)) {
        if (map.get(lowerCaseChar) === 2) {
          map.set(lowerCaseChar, 3);
        }
      } else {
        map.set(lowerCaseChar, 1);
      }
    } else {
      if (map.has(lowerCaseChar)) {
        if (map.get(lowerCaseChar) === 1) {
          map.set(lowerCaseChar, 2);
        }
      } else {
        map.set(lowerCaseChar, 3);
      }
    }
  }

  let count = 0;
  for (const x of map.values()) {
    if (x === 2) {
      count++;
    }
  }
  return count;
}

console.log(numberOfSpecialChars("cCceDC"));
// console.log(numberOfSpecialChars("aaAbcBC"));
