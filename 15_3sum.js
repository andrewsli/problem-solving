/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Solution passes 311/313 leetcode tests but fails due to exceeding time limit
// Todo: Find more efficient solution
var threeSum = function (nums) {
  let results = [];
  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        j++;
        while (nums[k] === nums[k - 1]) k--;
        k--;
      }
      else if (sum < 0) j++;
      else k--;
    }
  }
  return results;
}