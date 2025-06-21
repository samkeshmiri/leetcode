// 3335. Total Characters in String After Transformations I

const transformMap: Map<string, string> = new Map([
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
  ["f", "g"],
  ["g", "h"],
  ["h", "i"],
  ["i", "j"],
  ["j", "k"],
  ["k", "l"],
  ["l", "m"],
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["q", "r"],
  ["r", "s"],
  ["s", "t"],
  ["t", "u"],
  ["u", "v"],
  ["v", "w"],
  ["w", "x"],
  ["x", "y"],
  ["y", "z"],
  ["z", "ab"],
]);

function lengthAfterTransformations(s: string, t: number): number {
  const memo = new Map<string, string>();
  let result = "";
  for (const char of s) {
    const key = `${char}:${t}`;
    if (!memo.has(key)) {
      memo.set(key, helper(char, t, memo));
    }
    result += memo.get(key)!;
  }

  const modulo = 1e9 + 7;
  return result.length % modulo;
}

function helper(s: string, t: number, memo: Map<string, string>): string {
  const key = `${s}:${t}`;
  if (memo.has(key)) return memo.get(key);
  if (t === 0) return s;

  let next = "";
  for (const char of s) {
    const transformed = transformMap.get(char);
    next += helper(transformed, t - 1, memo);
  }

  memo.set(key, next);
  return next;
}

console.log(lengthAfterTransformations("v", 7));
