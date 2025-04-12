# 57. Insert Interval

from typing import List


class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        leftInsert = newInterval[0]
        rightInsert = newInterval[1]
        isInserted = False  # to track if it has been inserted and break loop

        res = []
        for i in range(len(intervals)):
            curr = intervals[i]

            leftCurr = curr[0]
            rightCurr = curr[1]
            # if the current interval is before the new interval
            # we can add it to the result
            if rightCurr < leftInsert:
                res.append(curr)
            # if the current interval is after the new interval
            elif leftCurr > rightInsert:
                if not isInserted:
                    res.append([leftInsert, rightInsert])
                    isInserted = True
                res.append(curr)
            # if the current interval overlaps with the new interval
            # when they overlap, we keep updating the new insert interval until we've absorbed all of the intervals we can merge
            else:
                leftInsert = min(leftInsert, leftCurr)
                rightInsert = max(rightInsert, rightCurr)

        # if we end up merging all of them then we need to insert it as the last one
        if not isInserted:
            res.append([leftInsert, rightInsert])

        return res


print(Solution().insert([[1, 3], [6, 9]], [2, 5]))
# [3,5]
# [4,8]
