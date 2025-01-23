# 134. Gas Station
# greedy time n(o) space o(1)
from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        # total cost of gas cannot exceed gas
        if sum(gas) < sum(cost):
            return -1
        # definitely a solution then

        total = 0
        res = 0
        for i in range(len(gas)):
            total += (gas[i] - cost[i])

            if total < 0:
                total = 0
                res = i + 1

        return res
