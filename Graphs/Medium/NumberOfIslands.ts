// 200. Number of Islands

function numIslands(grid: string[][]): number {
  // 1. we loop through the entire grid, if we come across an unvisited 1, we do a dfs on it
  // 2. our base cases for the recursive DFS:
  //      check if it's been visited
  //      check if it's out of bounds
  //      check if it's a 0
  // 3. mark the coord as visited
  // 4. then perform a DFS on each the directions we want to search for a 1 (up, down, left right—NOT diagonal)
  // 5. once DFS has complete increment the number of islands
  // 6. repeat from 1 - 5 step one until we've traversed the entire grid
  // 7. return islands

  let islands = 0;
  const visited = new Set<string>();
  const directions = [
    [1, 0], // down (row)
    [-1, 0], // up (row)
    [0, -1], // left (col)
    [0, 1], // right (col)
  ];

  function dfs(row: number, col: number) {
    const coord = `${row},${col}`;

    // out of bounds
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return;
    }

    //
    if (grid[row][col] == "0") {
      return;
    }

    // visited should come after bounds and grid check to avoid unnecessary checks
    if (visited.has(coord)) {
      return;
    }

    visited.add(coord);

    // loop through each vertical and horizontal direction
    for (const [d_row, d_col] of directions) {
      dfs(d_row + row, d_col + col);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1" && !visited.has(`${row},${col}`)) {
        dfs(row, col);
        islands++;
      }
    }
  }

  return islands;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
