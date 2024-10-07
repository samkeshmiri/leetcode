function intToRoman(num: number): string {
  const map = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "M",
    3000: "M",
  };

  let factor = 1;
  let ans = "";

  while (num > 0) {
    let romanToConvert = (num % 10) * factor;

    if (romanToConvert !== 0) {
      ans = map[romanToConvert] + ans;
    }

    num = Math.floor(num / 10);
    factor *= 10;
  }

  return ans;
}

// console.log(intToRoman(10));

function intToRomanEfficient(num: number): string {
  const map = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let ans = "";
  for (let key of Object.keys(map).reverse()) {
    // reverse because Object.keys returns asc lexicographic order of keys
    let value = parseInt(key);

    if (num === 0) break;

    while (num >= value) {
      ans += map[value];
      num -= value;
    }
  }

  return ans;
}

console.log(intToRomanEfficient(99));

function intToRomanNoLoop(num: number): string {
  const romans = {
    0: ["", "", "", ""],
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC", "MM"],
    3: ["III", "XXX", "CCC", "MMM"],
    4: ["IV", "XL", "CD"],
    5: ["V", "L", "D"],
    6: ["VI", "LX", "DC"],
    7: ["VII", "LXX", "DCC"],
    8: ["VIII", "LXXX", "DCCC"],
    9: ["IX", "XC", "CM"],
  };

  return (
    romans[Math.floor(num / 1000) % 10][3] +
    romans[Math.floor(num / 100) % 10][2] +
    romans[Math.floor(num / 10) % 10][1] +
    romans[num % 10][0]
  );
}

// console.log(intToRomanNoLoop(123));
