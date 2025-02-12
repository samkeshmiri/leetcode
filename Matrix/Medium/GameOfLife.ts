// 289. Game of Life

function gameOfLife(board: number[][]): void {
  // Original | New | State
  //     0    |  0  |   0
  //     1    |  0  |   1
  //     0    |  1  |   2
  //     1    |  1  |   3

  const ROWS = board.length;
  const COLS = board[0].length;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const neighbourCount = countNeighbours(r, c);
      const cell = board[r][c];

      // is it not a zero?
      if (cell) {
        // does the cell's surrounding neighbours add up to 2 or 3?
        if ([2, 3].includes(neighbourCount)) {
          // change the 1 to a 3
          board[r][c] = 3;
        } else {
          // it was originally a 1 so it stays as a 1
        }
      } else if (neighbourCount === 3) {
        // original state 0's
        // when a 0 turns to 1 it becomes a 2 (in our new state)
        board[r][c] = 2;
      }
      // else it was originally a 0 which means it stays a 0
    }
  }

  // taking output state to map to new states
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = board[r][c];
      if (cell == 1) {
        board[r][c] = 0;
      } else if ([2, 3].includes(cell)) {
        board[r][c] = 1;
      }
    }
  }

  function countNeighbours(row: number, col: number): number {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
          continue;
        }
        if (r === row && c === col) {
          continue;
        }
        if (board[r][c] === 1 || board[r][c] === 3) {
          count++;
        }
      }
    }

    return count;
  }
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
