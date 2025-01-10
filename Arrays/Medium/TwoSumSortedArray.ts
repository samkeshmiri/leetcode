// 167. Two Sum II - Input Array Is Sorted

function twoSum(numbers: number[], target: number): number[] {
  let firstPointer = 0;
  let secondPointer = numbers.length - 1;

  while (firstPointer <= secondPointer) {
    const sum = numbers[firstPointer] + numbers[secondPointer];

    if (sum === target) {
      return [firstPointer + 1, secondPointer + 1];
    }

    if (sum > target) {
      secondPointer--;
    }

    if (sum < target) {
      firstPointer++;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
