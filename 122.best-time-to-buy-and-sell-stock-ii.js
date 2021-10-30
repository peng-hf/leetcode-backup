/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var total = 0
  for (var i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1]
    }
  }
  return total
};
// @lc code=end

