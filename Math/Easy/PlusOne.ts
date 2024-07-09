function plusOne(digits: number[]): number[] {
  let str = "";

  for (let i = 0; i < digits.length; i++) {
    str += digits[i];
  }

  let num = BigInt(str);
  num++;

  let result = num.toString().split("");

  return result.map((n) => parseInt(n));
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
