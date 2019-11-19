class Solution:
    def maxSubArray(self, nums) -> int:
        global_max = nums[0]
        curr_max = float('-inf')
        for num in nums:
            curr_max = max(num, curr_max + num)
            global_max = max(global_max, curr_max)
        return global_max