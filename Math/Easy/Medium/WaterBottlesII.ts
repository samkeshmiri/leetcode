// 3100. Water Bottles II

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let bottlesDrunk = 0;
  let emptyBottles = 0;

  while (numBottles) {
    bottlesDrunk += numBottles;
    emptyBottles += numBottles;
    numBottles -= numBottles;

    while (emptyBottles >= numExchange) {
      emptyBottles -= numExchange;
      numBottles++;
      numExchange++;
    }
  }

  return bottlesDrunk;
}

// optimised
function maxBottlesDrunkOptimised(
  numBottles: number,
  numExchange: number
): number {
  let drunk = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
    drunk += 1;
    empty -= numExchange - 1;
    numExchange += 1;
  }

  return drunk;
}

// console.log(maxBottlesDrunk(13, 6)); // 15
console.log(maxBottlesDrunkOptimised(13, 6)); // 15
