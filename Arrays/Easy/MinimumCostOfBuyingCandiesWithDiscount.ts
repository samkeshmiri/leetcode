// 2144. Minimum Cost of Buying Candies With Discount

function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);

  let count = 0;
  let totalCost = 0;
  for (let i = 0; i < cost.length; i++) {
    if (count == 2) {
      count = 0;
      continue;
    }

    totalCost += cost[i];
    count++;
  }

  return totalCost;
}

console.log(minimumCost([1, 2, 3]));

// 2, 2, 5, 6, 7, 9
// 1, 2, 3, 4, 5

// sort the array largest to smallest
// count of candies until we have two
// total cost that we add to before we get to 3 candies
// on the third candy, we ignore it
// repeat til end
// return tootal cost
