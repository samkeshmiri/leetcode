// 22. Generate Parentheses

function generateParenthesis(n: number): string[] {
  const results = [];
  const current = [];

  let open = n;
  let closed = n;

  function backtrack() {
    if (!open && !closed) {
      results.push(current.join(""));
      return;
    }

    if (open > 0) {
      current.push("(");
      open--;
      backtrack();
      open++;
      current.pop();
    }

    if (closed > open) {
      current.push(")");
      closed--;
      backtrack();
      closed++;
      current.pop();
    }
  }

  backtrack();
  return results;
}

console.log(generateParenthesis(3));
