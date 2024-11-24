// 1971. Find if Path Exists in Graph

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const routes = new Map<number, Set<number>>(); // use a set to increase lookup speed during traversal

  if (!edges) return false;
  if (n == 1) return true;
  if (source == destination) return true;

  for (const [key, value] of edges) {
    if (
      (key === source && value === destination) ||
      (key === destination && value === source)
    ) {
      return true; // return early if we find the source and destination are neighbours
    }
    // set key routes
    let currentVertexRoutes = routes.get(key) ?? new Set();
    currentVertexRoutes.add(value);
    routes.set(key, currentVertexRoutes);

    // set value routes
    currentVertexRoutes = routes.get(value) ?? new Set();
    currentVertexRoutes.add(key);
    routes.set(value, currentVertexRoutes);
  }

  const visitedVertices = new Set<number>(); // only need to mark as visited during traversals
  let queue: number[] = [];
  queue.push(source);
  while (queue.length) {
    const currentNumber = queue.shift();
    if (visitedVertices.has(currentNumber)) {
      continue;
    } else {
      const connectedNodes = routes.get(currentNumber);
      if (!connectedNodes) {
        return false;
      }
      if (connectedNodes.has(destination)) {
        return true;
      } else {
        for (const neighour of connectedNodes) {
          // checking if the neighbour has been visited, if not add it, avoid re-visiting neighbours
          if (!visitedVertices.has(neighour)) {
            visitedVertices.add(currentNumber);
            queue.push(neighour);
          }
        }
      }
    }
  }

  return false;
}

// console.log(
//   validPath(
//     3,
//     [
//       [0, 1],
//       [1, 2],
//       [2, 0],
//     ],
//     0,
//     2
//   )
// );

// console.log(
//   validPath(
//     6,
//     [
//       [0, 1],
//       [0, 2],
//       [3, 5],
//       [5, 4],
//       [4, 3],
//     ],
//     0,
//     5
//   )
// );
console.log(
  validPath(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9
  )
);
