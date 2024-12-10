// 71. Simplify Path

function simplifyPath(path: string): string {
  const stack = [];

  for (const directory of path.split("/")) {
    if (directory == "..") {
      stack.pop();
    } else if (directory === "." || directory === "") {
      continue;
    } else {
      stack.push(directory);
    }
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/.../a/../b/c/../d/./"));
console.log(simplifyPath("/home//foo/"));
