/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let lowerBound = 0;
  let upperBound = nums.length - 1;
  let midway;

  // If array is rotated
  if (target > nums[upperBound] && target < nums[lowerBound]) return -1;

  // set bounds for searching based on whether arr is rotated and if it is,
  // whether the target is in first or second chunk using a helper function
  if (nums[lowerBound]> nums[upperBound]) target > nums[upperBound] ? upperBound = findIndexMin(nums) - 1 : lowerBound = findIndexMin(nums);

  do {
    midway = Math.floor((lowerBound + upperBound) / 2);
    if (nums[midway] === target) return midway;
    if (nums[upperBound] === target) return upperBound;
    if (midway === lowerBound) return -1;

    if (target > nums[midway]) lowerBound = midway;
    else upperBound = midway;
  } while (lowerBound < upperBound)

  return -1;
};

// helper function to find index by modifying my solution for leetcode 153
// returns index of minimum number in a sorted rotated array
var findIndexMin = function (nums) {
  let ref = nums[0];
  let min = 0;
  let max = nums.length - 1;

  while (min < max - 1) {
    let midway = Math.floor((min + max) / 2);

    // if number midway through is bigger than ref
    if (nums[midway] > ref) {
      if (nums[midway + 1] < ref) return midway + 1;

      min = midway;
      continue;
    }

    // if number midway through is less than ref
    if (nums[midway - 1] > ref) return midway;

    max = midway;
  }

  return Math.min(nums[min], nums[max], ref)
};