class Solution:
    def maxProduct(self, nums) -> int:
        global_max = nums[0]
        curr_max = nums[0]
        curr_min = nums[0]
        for idx in range(1, len(nums)):
          local_min = min(curr_min * nums[idx], curr_max * nums[idx], nums[idx])
          curr_max = max(curr_max * nums[idx], curr_min * nums[idx], nums[idx])
          curr_min = local_min
          global_max = max(global_max, curr_max)
        return global_max
