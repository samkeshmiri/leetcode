// 134. Gas Station

// brute force o(n^2)
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let startIndex = 0;
  let total = 0;
  let n = gas.length;

  if (gas.length === 1) {
    if (gas[0] === cost[0]) {
      return 0;
    }
  }

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] <= cost[i]) {
      continue;
    } else {
      startIndex = i;
      let stations = n;
      let j = i;
      while (stations) {
        total += gas[j];
        total -= cost[j];
        if (total < 0) {
          break;
        } else {
          startIndex = (j + 1) % n;
          stations--;
          j = (j + 1) % n;
        }
      }

      if (total >= 0) {
        return i;
      }
      total = 0;
    }
  }

  return -1;
}

console.log(canCompleteCircuit([2], [2]));
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
