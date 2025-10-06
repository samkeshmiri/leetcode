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

console.log(maxBottlesDrunk(13, 6)); // 15
