# 135. Candy

from typing import List


class Solution:
    def candy(self, ratings: List[int]) -> int:
        # all children need a candy, so we initialise all with 1
        result = [1] * len(ratings)

        # first pass checks if the current kid is higher rated than the one before it
        for i in range(1, len(ratings)):
            # if it is, then we increment the current kids candy count by adding 1 more than the amount the one before it has
            if ratings[i - 1] < ratings[i]:
                result[i] = result[i - 1] + 1

        # second pass checks if the right kid is higher rated
        for i in range(len(ratings) - 2, -1, -1):
            # if it is, we check if the current kid has more candy than the lower rated neighbor, if the neighbor has more, then we take it and add one
            # or stick with what we got because it is the MINIMUM candy we need to return to satisfy the requirements
            if ratings[i + 1] < ratings[i]:
                result[i] = max(result[i], result[i + 1] + 1)

        return sum(result)


print(Solution().candy([1, 0, 2]))  # 5
