// 1578. Minimum Time to Make Rope Colorful

function minCost(colors: string, neededTime: number[]): number {
  let awaited = 0;
  let sumOfTimesInGroup = 0;
  let maxTimeSeenInGroup = 0;
  let currentColor = "";

  for (let i = 0; i < colors.length; i++) {
    if (currentColor !== colors[i]) {
      currentColor = colors[i];
      awaited += sumOfTimesInGroup - maxTimeSeenInGroup;
      maxTimeSeenInGroup = neededTime[i];
      sumOfTimesInGroup = neededTime[i];
    } else {
      maxTimeSeenInGroup = Math.max(neededTime[i], maxTimeSeenInGroup);
      sumOfTimesInGroup += neededTime[i];
    }
  }

  return (awaited += sumOfTimesInGroup - maxTimeSeenInGroup);
}

console.log(minCost("abaac", [1, 2, 3, 4, 5])); // 3
// console.log(minCost("aaabbbabbbb", [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])); // 26
