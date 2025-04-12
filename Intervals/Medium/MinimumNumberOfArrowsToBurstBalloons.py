# 452. Minimum Number of Arrows to Burst Balloons

from typing import List


class Solution:
    # points are sorted ascending by the second item in the list
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points = sorted(points, key=lambda x: x[1])

        rightSideOfBalloon = points[0][1]
        arrows = 1
        for i in range(1, len(points)):
            currBalloon = points[i]
            # if an arrow overlaps, we skip incrementing
            # if the left side of the current balloon is greater than the right side of the one we are shooting an arrow through, then we need a new arrow
            if currBalloon[0] > rightSideOfBalloon:
                arrows += 1
                rightSideOfBalloon = points[i][1]

        return arrows


print(Solution().findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))  # 2
# print(Solution().findMinArrowShots([[3, 9], [7, 12], [3, 8], [
#       6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]))  # 2
