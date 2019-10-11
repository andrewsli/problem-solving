class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        result = []
        counter = [0] * 1001
        for num in arr1:
            counter[num] += 1
        for num in arr2:
            while counter[num]:
                result.append(num)
                counter[num] -= 1
        for idx, num in enumerate(counter, 0):
            while counter[idx]:
                result.append(idx)
                counter[idx] -= 1
        return result
