function rotateString(s: string, goal: string): boolean {
  for (let i = 0; i < s.length; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i);
    if (rotatedString == goal) return true;
  }

  return false;
}

console.log(rotateString("abc", "bca"));
