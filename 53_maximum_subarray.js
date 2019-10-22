/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let globalMax = nums[0];
  let currMax = Number.MIN_SAFE_INTEGER;
  for (let num of nums) {
    currMax = Math.max(num, currMax + num);
    if (currMax > globalMax) globalMax = currMax;
  }
  return globalMax;
};