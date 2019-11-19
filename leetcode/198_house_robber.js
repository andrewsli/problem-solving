/**
 * @param {number[]} nums
 * @return {number}
 */



// inefficient way that times out, recursive way
// var rob = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);
//   return Math.max(nums[0] + rob(nums.slice(2)), rob(nums.slice(1)));
// };

// recursive way with memoization, take up space due to recursion stack
// to do: do this iteratively
let seen = {};

var rob = function (nums) {
  if (nums.length === 0) return 0;
  // because leetcode won't reset seen between tests
  let str = nums.join();
  seen[str] = {};

  return helper(nums, 0, str);
};

function helper(nums, i, str) {
  if (i >= nums.length) return 0;
  if (seen[str][i] !== 0 && !seen[str][i]) seen[str][i] = Math.max(helper(nums, i + 2, str) + nums[i], helper(nums, i + 1, str));
  return seen[str][i];
}