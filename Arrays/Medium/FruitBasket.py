# 904. Fruit Into Baskets

from typing import List


class Solution:
    def totalFruit(self, fruits: List[int]) -> int:

        if len(fruits) == 0:
            return 0

        max_count = 1
        basket_left_fruit_type = fruits[0]
        left_prev = 1
        basket_right_fruit_type = -1
        right_prev = 0
        curr_count = 1

        for fruit in fruits[1:]:
            if fruit == basket_left_fruit_type:
                left_prev += 1
                right_prev = 0
            elif fruit == basket_right_fruit_type:
                right_prev += 1
                left_prev = 0
            else:
                if left_prev > right_prev:
                    basket_right_fruit_type = fruit
                    curr_count = left_prev
                    right_prev = 1
                    left_prev = 0
                else:
                    basket_left_fruit_type = fruit
                    curr_count = right_prev
                    left_prev = 1
                    right_prev = 0

            curr_count += 1
            max_count = max(max_count, curr_count)

        return max_count