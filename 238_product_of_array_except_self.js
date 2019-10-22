/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums.length <= 1) return 0;

  // make a left and right array where the elements are the products
  // of every element left and right of the current index of the input array
  let L = [];
  let R = [];
  // populate left products array
  L[0] = 1;
  for (let idx = 0; idx < nums.length - 1; idx++) {
    L[idx + 1] = nums[idx] * L[idx];
  }
  // populate right products array in reverse
  R[nums.length - 1] = 1;
  for (let idx = nums.length - 1; idx > 0; idx--) {
    R[idx - 1] = nums[idx] * R[idx];
  }
  let answer = [];
  for (let idx in nums) {
    answer[idx] = L[idx] * R[idx];
  }
  return answer;
};