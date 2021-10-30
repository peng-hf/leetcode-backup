/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums, k) { // Space: O(n), Time: O(n)
  if (nums.length < 2 || k === 0) return
  var mapIdx = {}
  for (let i = 0; i < nums.length; ++i) {
    const newIdx = (i + k) % nums.length
    mapIdx[newIdx] = nums[i]
  }

  for (let i = 0; i < nums.length; ++i) {
    nums[i] = mapIdx[i]
  }
};

function reverse(arr, start, end) {
  while (start < end) {
    const tmp = arr[start]
    arr[start] = arr[end]
    arr[end] = tmp
    start++
    end--
  }
}

var rotate = function(nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}
// @lc code=end

