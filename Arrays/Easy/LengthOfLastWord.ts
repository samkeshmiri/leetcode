function lengthOfLastWord(s: string): number {
  return s.trimEnd().split(" ").pop().length;

  //   const arr = s.split(/\s+/);
  //   let word = "";
  //   while (word.length == 0) {
  //     word = arr.pop();
  //   }
  //   return word.length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
