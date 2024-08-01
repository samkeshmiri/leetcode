function romanToInt(s: string): number {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanSymbols[s[i]];
    const next = romanSymbols[s[i + 1]] || 0;

    if (current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  return sum;
}

console.log(romanToInt("MCMXCIV")); // 1994
