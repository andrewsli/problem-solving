/**
 * @param {number[]} nums
 * @return {number}
 */

// iteratively

var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let ref = nums[0];
  let min = 0;
  let max = nums.length - 1;

  while (true) {
    let midway = Math.floor((min + max) / 2);
    if (min >= max - 1) {
      return Math.min(nums[min], nums[max], ref);
    }

    // if number midway through is bigger than ref
    if (nums[midway] > ref) {
      if (nums[midway + 1] < ref) return nums[midway + 1];

      min = midway;
      continue;
    }

    // if number midway through is less than ref
    if (nums[midway - 1] > ref) return nums[midway];

    max = midway;

  }
};


// recursive attempt

// var findMin = function (nums) {
//   if (nums.length <= 1) return nums[0];
//   let ref = nums[0];
//   let midway = Math.floor(nums.length / 2);

//   if (nums[midway] > ref) {
//     if (nums[midway + 1] < ref) return nums[midway + 1];

//     return findMin(nums.slice(midway));
//   }

//   if (nums[midway - 1] < ref) return nums[midway - 1];

//   return findMin(nums.slice(0, midway));
// };