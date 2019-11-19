var twoSum = function(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    // have to check index 0 specifically cause it's falsey
    if (seen[target - nums[i]] === 0 || seen[target - nums[i]]) {
      return [seen[target - nums[i]], i];
    } else if (!seen[nums[i]]) {
      seen[nums[i]] = i;
    }
  }
};
