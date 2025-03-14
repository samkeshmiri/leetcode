// 784. Letter Case Permutation

function letterCasePermutation(s: string): string[] {
  const results = [];
  const currentSolution = [];
  let currentIndex = 0;

  function backtrack() {
    if (currentIndex === s.length) {
      results.push(currentSolution.join(""));
      return;
    }

    const char = s[currentIndex];

    if (isNaN(parseInt(char))) {
      // convert to lower and recurse
      currentSolution.push(char.toLowerCase());
      currentIndex++;
      backtrack();
      currentSolution.pop();
      currentIndex--;

      // convert to uppercase and recurse
      currentSolution.push(char.toUpperCase());
      currentIndex++;
      backtrack();
      currentSolution.pop();
      currentIndex--;
    } else {
      // add as number
      currentSolution.push(char);
      currentIndex++;
      backtrack();
      currentSolution.pop();
      currentIndex--;
    }
  }

  backtrack();
  return results;
}

console.log(letterCasePermutation("a1b2"));
