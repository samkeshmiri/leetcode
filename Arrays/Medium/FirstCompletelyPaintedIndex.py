# 2661. First Completely Painted Row or Column

from typing import List


class Solution:
    def firstCompleteIndex(self, arr: List[int], mat: List[List[int]]) -> int:
        map = [0] * (len(arr) + 1)
        i = 1
        # setup map
        for c in mat:
            for r in c:
                map[r] = i
                i += 1
                # example [0, 1, 3, 4, 2]

        cols = [0] * (len(mat[0]))
        rows = [0] * (len(mat))
        maxRows = len(mat[0])
        maxCols = len(mat)

        def helper(num: int):
            row = num//maxCols
            col = num % maxRows
            return row, col

        for i, num in enumerate(arr):
            row, col = helper(map[num]-1)
            print(f'{num=}{row, col=}')
            cols[col] += 1
            rows[row] += 1
            print(f'{rows, cols}')
            if (cols[col] >= maxCols):
                return i
            if (rows[row] >= maxRows):
                return i
        return -1


print(Solution().firstCompleteIndex([1, 3, 4, 2], [[1, 4], [2, 3]]))
