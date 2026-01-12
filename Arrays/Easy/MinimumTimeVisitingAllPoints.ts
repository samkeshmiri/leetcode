// 1266. Minimum Time Visiting All Points

function minTimeToVisitAllPoints(points: number[][]): number {
  let moves = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const currentPoint = points[i];
    const nextPoint = points[i + 1];

    const dx = Math.abs(currentPoint[0] - nextPoint[0]);
    const dy = Math.abs(currentPoint[1] - nextPoint[1]);

    const biggestDelta = Math.max(dx, dy);

    moves += biggestDelta;
  }

  return moves;
}

// console.log(
//   minTimeToVisitAllPoints([
//     [1, 1],
//     [3, 4],
//     [-1, 0],
//   ])
// );

console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
);
