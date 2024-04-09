/*
Best Time to buy stocks
You are given an array prices where prices[i] is the price of a given stock on  ith day
You want to maximize profit by choosing a single day to buy one stock
and choosing a different day in the future to sell that stock
return the maximum profit, it you cannot achieve any profit , return 0

Input :prices=[7,1,5,3,6,4] ====>Output 5
Input :prices=[7,6,4,3,1]   ====>Output 0
*/
//Approach 1
// function maxProfit(prices) {
//   let globalProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let diff = prices[j] - prices[i];
//       globalProfit = Math.max(globalProfit, diff);
//     }
//   }
//   return globalProfit;
// }
//Approach 2 Greedy approach
function maxProfit(prices) {
  let minimumStockPurchasePrice = prices[0] || 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimumStockPurchasePrice) {
      minimumStockPurchasePrice = prices[i];
    }
    let currProfit = prices[i] - minimumStockPurchasePrice;
    profit = Math.max(currProfit, profit);
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 2, 1]));
