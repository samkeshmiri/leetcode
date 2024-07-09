function strStr(haystack: string, needle: string): number {
  let wordStartIndex = needle.length;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const word = haystack.slice(i, wordStartIndex);

    if (word == needle) return i;

    wordStartIndex++;
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("asa", "jk"));
