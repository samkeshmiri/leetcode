function decrypt(code: number[], k: number): number[] {
  return k === 0
    ? new Array(code.length).fill(0)
    : code.map((_value, index) => {
        let subArray = [];
        if (k > 0) {
          for (let i = 0; i < k; i++) {
            subArray.push(code[(index + i + 1) % code.length]);
          }
        } else if (k < 0) {
          for (let i = 0; i < Math.abs(k); i++) {
            subArray.push(code[(index - i - 1 + code.length) % code.length]);
          }
        }
        return subArray.reduce((prev, curr) => {
          return prev + curr + 0;
        });
      });
}

// console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
