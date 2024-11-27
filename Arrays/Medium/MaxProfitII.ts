// 122. Best Time to Buy and Sell Stock II

function maxProfit(prices: number[]): number {
  let buyPrice = prices[0];
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    const currentProfit = sellPrice - buyPrice;

    if (currentProfit > 0) {
      totalProfit += currentProfit;
      buyPrice = sellPrice;
    } else {
      buyPrice = sellPrice;
    }
  }

  return totalProfit;
}

// [7,1,5,3,6,4] // 7