function reverseWords(s: string): string {
  return s
    .trimEnd()
    .trimStart()
    .split(" ")
    // .filter((string) => string.length > 0)
    .filter(Boolean)
    .reverse()
    .join(" ");
}

// console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
