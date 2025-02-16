// 207. Course Schedule

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const visited: number[] = new Array(numCourses).fill(0);
  // 0: unvisited
  // 1: visiting
  // 2: visited
  const graph = new Map<number, number[]>();

  // create graph
  for (const [course, prerequisite] of prerequisites) {
    // if (courses.has(course)) {
    //   return false;
    // }
    if (!graph.has(course)) {
      graph.set(course, [prerequisite]);
    } else {
      graph.get(course).push(prerequisite);
    }
  }

  // go through num courses
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] == 0) {
      if (!dfsHelper(i)) {
        return false;
      }
    }
  }

  function dfsHelper(course: number): boolean {
    visited[course] = 1;

    const adjPrerequesites = graph.get(course) ?? [];
    for (const adjCourse of adjPrerequesites) {
      if (visited[adjCourse] == 2) {
        continue;
      }
      // cycle
      if (visited[adjCourse] == 1) {
        return false;
      }
      if (visited[adjCourse] == 0) {
        if (!dfsHelper(adjCourse)) {
          return false;
        }
      }
    }
    visited[course] = 2;
    return true;
  }

  return true;
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false
