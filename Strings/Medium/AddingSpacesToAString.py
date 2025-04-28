# 2109. Adding Spaces to a String

from typing import List


class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        result = ''
        prev = 0

        for i in spaces:
            result += s[prev:i] + ' '
            prev = i

        result += s[spaces[-1]:]

        return result
