function combine(n: number, k: number): number[][] {
  let results = [];
  let currentSolution = [];

  function backtrack(startNumber: number) {
    if (currentSolution.length == k) {
      results.push([...currentSolution]);
      return;
    }

    for (let i = startNumber; i <= n; i++) {
      currentSolution.push(i);
      backtrack(i + 1);
      currentSolution.pop();
    }
  }

  backtrack(1);
  return results;
}

console.log(combine(4, 2));
