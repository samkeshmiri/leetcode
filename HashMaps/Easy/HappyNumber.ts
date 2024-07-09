function isHappy(n: number): boolean {
  let map = new Set();

  while (n !== 1 && !map.has(n)) {
    map.add(n);
    n = sumOfSquares(n);
  }

  return n === 1;
}

function sumOfSquares(num: number) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += Math.pow(digit, 2);

    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(isHappy(19));
