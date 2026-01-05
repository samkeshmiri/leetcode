// 1975. Maximum Matrix Sum

function maxMatrixSum(matrix: number[][]): number {
  let negativeCount = 0;
  let lowestValue = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      lowestValue = Math.min(lowestValue, Math.abs(matrix[i][j]));
      if (matrix[i][j] < 0) {
        negativeCount++;
      }
    }
  }

  let sum = matrix.reduce(
    (r, x) => r + x.reduce((s, y) => Math.abs(s) + Math.abs(y), 0),
    0
  );
  if (negativeCount % 2 !== 0) {
    return (sum = sum - 2 * Math.abs(lowestValue));
  }

  return sum;
}

// console.log(
//   maxMatrixSum([
//     [1, -1],
//     [-1, 1],
//   ])
// ); // 4

console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
); // 16
