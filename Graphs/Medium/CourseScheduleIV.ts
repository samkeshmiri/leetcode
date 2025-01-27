// 1462. Course Schedule IV

function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  const courses = new Map<number, Set<number>>();
  for (const [prerequisite, course] of prerequisites) {
    if (!courses.has(prerequisite)) {
      courses.set(prerequisite, new Set([course]));
    }
    courses.get(prerequisite)?.add(course);
  }

  //   console.log(courses);

  function isPrerequisite(
    prerequisite: number,
    course: number,
    seen: Set<number>
  ): boolean {
    // if prerequisite is not in courses then return false
    if (seen.has(prerequisite)) {
      return false;
    }
    if (!courses.has(prerequisite)) {
      return false;
    }
    seen.add(prerequisite);
    if (courses.get(prerequisite)?.has(course)) {
      return true;
    }
    const pres = courses.get(prerequisite);
    if (pres) {
      for (const element of pres) {
        if (isPrerequisite(element, course, seen)) {
          return true;
        }
      }
    }

    return false;
  }

  const result: boolean[] = [];
  for (const [prerequisite, course] of queries) {
    if (isPrerequisite(prerequisite, course, new Set())) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  checkIfPrerequisite(
    2,
    [[1, 0]],
    [
      [0, 1],
      [1, 0],
    ]
  )
); // false, true
