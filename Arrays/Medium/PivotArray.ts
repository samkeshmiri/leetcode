// 2161. Partition Array According to Given Pivot

function pivotArray(nums: number[], pivot: number): number[] {
  // list 1 (smaller than pivot)
  // list 2 (greater than pivot)
  // concatonate list 1 + pivots + list 2

  let smallerThanPivot = [];
  let largerThanPivot = [];

  for (const num of nums) {
    if (num < pivot) smallerThanPivot.push(num);
    if (num > pivot) largerThanPivot.push(num);
  }

  const countOfNums = nums.length;
  const countOfPivots =
    countOfNums - smallerThanPivot.length - largerThanPivot.length;

  return smallerThanPivot.concat(
    new Array(countOfPivots).fill(pivot),
    largerThanPivot
  );
}

// Time complexity: O(n)
// Space complexity: O(n)
