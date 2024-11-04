function compressedString(word: string): string {
  let count = 1;
  let comp = "";
  let previousLetter = word.charAt(0);
  let currentLetter = "";

  for (let i = 1; i < word.length; i++) {
    currentLetter = word.charAt(i);
    if (currentLetter == previousLetter && count < 9) {
      count++;
    } else {
      comp += count + previousLetter;
      count = 1;
      previousLetter = currentLetter;
    }
  }

  return (comp += count + previousLetter);
}

console.log(compressedString("abcde"));

// Example 1:

// Input: word = "abcde"

// Output: "1a1b1c1d1e"

// Explanation:

// Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.

// For each prefix, append "1" followed by the character to comp
