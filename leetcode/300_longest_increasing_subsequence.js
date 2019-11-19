/**
 * @param {number[]} nums
 * @return {number}
 */

 // N^2 approach
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  // the lengths of the longest increasing sequences up to the corresponding index
  let lis = [];
  for (let i = 0; i < nums.length; i++) {
    lis.push(1);
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  return Math.max(...lis);
};