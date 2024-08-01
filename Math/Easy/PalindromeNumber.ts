function isPalindromeNumber(x: number): boolean {
  if (x < 0) return false;

  const s = String(x);

  let end = s.length - 1;

  for (let start = 0; start < end; start++) {
    const frontNumber = s[start];
    const rearNumber = s[end];

    if (frontNumber !== rearNumber) return false;

    end--;
  }

  return true;
}

console.log(isPalindromeNumber(121));
