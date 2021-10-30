/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) { // Time O(n^2), Space O(1)
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return []
};

var twoSum = function(nums, target) {
  var mapIdx = {}
  for (let i = 0; i < nums.length; ++i) {
    const expected = target - nums[i]
    if (expected in mapIdx) return [i, mapIdx[expected]]
    mapIdx[nums[i]] = i
  }
}
// @lc code=end

