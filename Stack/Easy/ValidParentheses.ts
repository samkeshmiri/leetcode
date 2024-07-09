function isValid(s: string): boolean {
  const stack = [];

  for (const bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
      continue;
    }

    const poppedBracket = stack.pop();

    switch (bracket) {
      case ")":
        if (poppedBracket === "(") {
          continue;
        } else {
          return false;
        }

      case "}":
        if (poppedBracket === "{") {
          continue;
        } else {
          return false;
        }

      case "]":
        if (poppedBracket === "[") {
          continue;
        } else {
          return false;
        }
    }
  }

  if (stack.length) return false;

  return true;
}

console.log(isValid("(("));
// console.log(isValid("(){}[]"));
