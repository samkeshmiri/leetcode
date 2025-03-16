// 875. Koko Eating Bananas

// binary search o(log(n)*m)
function minEatingSpeed(piles: number[], h: number): number {
  // we could start at one,
  // or we can start at the minimum rate which
  // is the sum of the piles (all bananas divided by the number of hours we have to eat all those bananas)
  let left = Math.ceil(piles.reduce((a, b) => a + b) / h);
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    let k = Math.floor((left + right) / 2); // midpoint
    let hours = 0;

    for (const bananas of piles) {
      hours += Math.ceil(bananas / k);
    }

    if (hours <= h) {
      // if within time limit
      result = Math.min(result, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
}

function minEatingSpeedBruteForce(piles: number[], h: number): number {
  //   let k = Math.min(...piles);
  let k = 1; // starting with slowest possible count
  let maxPile = Math.max(...piles); // max bananas in a single pile
  let result = maxPile; // default worst case answer
  while (k <= maxPile) {
    let hoursToEatPile = 0;
    for (let i = 0; i < piles.length; i++) {
      let bananas = piles[i];
      hoursToEatPile = Math.ceil(bananas / k);
    }

    if (hoursToEatPile <= h) {
      return k; // wrongly returns first valid k
    }

    k++;
  }

  return result;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
