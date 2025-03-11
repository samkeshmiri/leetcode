// 74. Search a 2D Matrix

function searchMatrix(matrix: number[][], target: number): boolean {
  // binary search the row
  let left = 0;
  let right = matrix.length - 1;

  // binary search rows
  while (left <= right) {
    const midPoint = left + Math.floor((right - left) / 2);

    if (target < matrix[midPoint][0]) {
      right = midPoint - 1;
    } else if (target > matrix[midPoint][matrix[0].length - 1]) {
      left = midPoint + 1;
    } else {
      // binary search columns
      let innerLeft = 0;
      let innerRight = matrix[0].length - 1;
      while (innerLeft <= innerRight) {
        const innerMidPoint =
          innerLeft + Math.floor((innerRight - innerLeft) / 2);

        if (target === matrix[midPoint][innerMidPoint]) {
          return true;
        } else if (target < matrix[midPoint][innerMidPoint]) {
          innerRight = innerMidPoint - 1;
        } else {
          innerLeft = innerMidPoint + 1;
        }
      }
      return false;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // true
// console.log(searchMatrix([[1, 3]], 3));
// // console.log(searchMatrix([[1, 1]], 2)); // false
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// ); // false
