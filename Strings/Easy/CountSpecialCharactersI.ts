// 3120. Count the Number of Special Characters

// false means its lower case
// a -> false
//
// B -> false (get this, check its case, if it's different from the one in our iteration, then we can set it to true)

// "aaAcBC"
function numberOfSpecialChars(word: string): number {
  const map = new Map<string, boolean>();
  for (const char of word) {
    const lowerCasedChar = char.toLowerCase();
    const isLowerCased = lowerCasedChar === char;
    if (map.get(char.toLowerCase()) === true || map.get(char.toUpperCase()) === true) {
      continue;
    }

    if (isLowerCased) {
      if (map.has(char.toUpperCase())) {
        map.set(char, true);
        continue;
      } else {
        map.set(char, false);
        continue;
      }
    } else if (map.has(char.toLowerCase())) {
      map.set(char.toLowerCase(), true);
    } else {
      map.set(char, false);
    }
  }

  let sum = 0;
  for (const entry of map) {
    if (entry[1]) {
      sum++;
    }
  }

  return sum;
}

console.log(numberOfSpecialChars("abBCab"));
