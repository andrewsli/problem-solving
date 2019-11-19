class Solution:
    def maxProfit(self, prices) -> int:
        if len(prices) == 0:
            return 0
        lowest = prices[0]
        max_profit = 0
        for price in prices:
            if price < lowest:
                lowest = price
            elif price - lowest > max_profit:
                max_profit = price - lowest
        return max_profit
        