// 198. House Robber

function rob(nums: number[]): number {
  let maxRobberyTwoHousesBack = 0; // max we can rob 2 houses ago
  let maxAmountAtCurrentHouse = 0; // max we could rob up to the previous house

  for (const currentHouseAmount of nums) {
    let potentialMaxAmount = Math.max(
      currentHouseAmount + maxRobberyTwoHousesBack,
      maxAmountAtCurrentHouse
    );
    maxRobberyTwoHousesBack = maxAmountAtCurrentHouse;
    maxAmountAtCurrentHouse = potentialMaxAmount;
  }

  return maxAmountAtCurrentHouse;
}

console.log(rob([3, 2, 1, 0]));
