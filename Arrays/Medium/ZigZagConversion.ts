// 6. ZigZag

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let result = "";

  // time complexity is size of the string
  for (let row = 0; row < numRows; row++) {
    const increment = 2 * (numRows - 1);

    for (let k = row; k < s.length; k += increment) {
      result += s[k];

      // middle row, subtracting 2 * row
      // is the index in bounds?

      if (row > 0 && row < numRows - 1 && k + increment - 2 * row < s.length) {
        result += s[k + increment - 2 * row];
      }
    }
  }

  return result;
}

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
