// 1910. Remove All Occurrences of a Substring

function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) {
    s = s.replace(part, "");
  }

  return s;
}

console.log(removeOccurrences("daabcbaabcbc", "abc")); // "dab"
