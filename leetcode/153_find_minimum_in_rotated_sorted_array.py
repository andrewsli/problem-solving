class Solution:
    def findMin(self, nums) -> int:
        if nums[0] < nums[-1]:
            return nums[0]
        if len(nums) <= 3:
            return min(nums)
        lower_bound = 0
        upper_bound = len(nums) - 1
        while True:
            midway = (lower_bound + upper_bound) // 2
            if midway == lower_bound or midway == upper_bound:
                return min(nums[lower_bound], nums[upper_bound], nums[midway])
            if nums[midway] > nums[0]:
                if nums[midway + 1] < nums[0]:
                    return nums[midway + 1]
                lower_bound = midway
            else:
                if nums[midway - 1] > nums[0]:
                    return nums[midway]
                upper_bound = midway
