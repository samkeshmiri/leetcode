function letterCombinations(digits: string): string[] {
  let result = [];
  let currentSolution = [];
  const phoneMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function backtrack(index: number) {
    if (currentSolution.length == digits.length) {
      result.push(currentSolution.join(""));
      return;
    }

    // we do not need to track visited digits because we are creating combinations not permutations
    // each “digit position” has a fixed set of choices (letters) that we need to explore independently
    const letters = phoneMap[digits[index]];
    for (let letter of letters) {
      currentSolution.push(letter);
      backtrack(index + 1);
      currentSolution.pop();
    }
  }

  backtrack(0);
  return result;
}

console.log(letterCombinations("23"));
