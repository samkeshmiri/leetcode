/**
 * @param prices Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let currentStock = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentProfit = prices[i] - currentStock;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
      continue;
    }

    if (currentStock > prices[i]) {
      currentStock = prices[i];
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
