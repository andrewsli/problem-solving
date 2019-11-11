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

  let allIndexPairs = new Set();
  for (let x = 0; x < nums.length - 1; x++) {
    if (nums[x] === nums[x - 1]) continue;
    for (let y = x + 1; y < nums.length; y++) {
      allIndexPairs.add([x, y]);
    }
  }

  let seen = new Set()
  for (let pair of allIndexPairs) {
    for (let z = pair[1] + 1; z < nums.length; z++) {
      if (pair.includes(z)) continue;
      if (nums[pair[0]] + nums[pair[1]] + nums[z] === 0
        &&
        !seen.has(`${nums[pair[0]]}${nums[pair[1]]}${nums[z]}`)
      ) {
        results.push([nums[pair[0]], nums[pair[1]], nums[z]]);
        seen.add(`${nums[pair[0]]}${nums[pair[1]]}${nums[z]}`);
      }
    }
  }
  return results;
}