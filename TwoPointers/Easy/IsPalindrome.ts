function isPalindrome(s: string): boolean {
  s = s.replace(/[\W_]+/g, "").toLowerCase();

  let end = s.length - 1;

  for (let start = 0; start < end; start++) {
    const frontWord = s[start];
    const rearWord = s[end];

    if (frontWord !== rearWord) return false;
    end--;
  }

  return true;
}

console.log(isPalindrome("heh")); // true 
console.log(isPalindrome("")); // true 
console.log(isPalindrome("ab_a")); // true 
console.log(isPalindrome("racarea")); // false 
console.log(isPalindrome("racear")); // true 
