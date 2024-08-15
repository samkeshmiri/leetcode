// Iterate through t, if a character matches s, increment s index. If s index reaches s length, return true.

function isSubsequence(s: string, t: string): boolean {
  let sPointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sPointer]) {
      sPointer++;
    }
  }

  return sPointer === s.length;
}

console.log(isSubsequence("abe", "abded"));
