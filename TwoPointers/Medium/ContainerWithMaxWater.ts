// 11. Container With Most Water

function maxArea(height: number[]): number {
  let max = 0;

  let firstPointer = 0;
  let secondPointer = height.length - 1;

  while (firstPointer < secondPointer) {
    const distanceBetweenPoints = secondPointer - firstPointer;
    const firstPoint = height[firstPointer];
    const secondPoint = height[secondPointer];

    const smallerPoint = Math.min(firstPoint, secondPoint);
    const area = smallerPoint * distanceBetweenPoints;

    max = Math.max(area, max);

    if (height[firstPointer] > height[secondPointer]) {
      secondPointer--;
    } else {
      firstPointer++;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
