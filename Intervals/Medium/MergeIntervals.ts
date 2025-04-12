// 56. Merge Intervals

function merge(intervals: number[][]): number[][] {
  let answer = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let firstInterval = intervals[0][0];
  let secondInterval = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const intervalToCheck = intervals[i];

    if (intervalToCheck[0] <= secondInterval) {
      secondInterval = Math.max(intervalToCheck[1], secondInterval);
      continue;
    } else {
      answer.push([firstInterval, secondInterval]);
      firstInterval = intervalToCheck[0];
      secondInterval = intervalToCheck[1];
    }
  }

  answer.push([firstInterval, secondInterval]);

  return answer;
}

// console.table(
//   merge([
//     [1, 4],
//     [4, 5],
//   ])
// );

console.table(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
