def twoSum(self, nums: List[int], target: int) -> List[int]:
    seen = {}
    for idx, num in enumerate(nums, 0):
        if seen.get(target - num) == 0 or seen.get(target - num):
            return [seen[target - num], idx]
        elif not seen.get(nums[idx]):
            seen[num] = idx
