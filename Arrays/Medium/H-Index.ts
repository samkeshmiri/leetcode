// 274. H-Index

// Formally, if f is the function that corresponds to the number of citations for each publication,
// we compute the h-index as follows:
// First we order the values of f from the largest to the lowest value.
// Then, we look for the last position in which f is greater than or equal to the position (we call h this position).
// For example, if we have a researcher with 5 publications A, B, C, D, and E with 10, 8, 5, 4, and 3 citations,
// respectively, the h-index is equal to 4 because the 4th publication has 4 citations and the 5th has only 3.
//  In contrast, if the same publications have 25, 8, 5, 3, and 3 citations, then the index is 3 (i.e. the 3rd position) because the fourth paper has only 3 citations.

// f(A)=10, f(B)=8, f(C)=5, f(D)=4, f(E)=3　→ h-index=4
// f(A)=25, f(B)=8, f(C)=5, f(D)=3, f(E)=3　→ h-index=3

// brute force solution
// o(n^2)
function hIndex(citations: number[]): number {
  let currentH = 0;
  let hIndex = 0;
  let paperCount = 0;
  let totalPaperCount = citations.length;

  while (currentH <= totalPaperCount) {
    for (let i = 0; i < citations.length; i++) {
      if (currentH === paperCount) {
        break;
      }

      if (citations[i] >= currentH) {
        paperCount++;
      }
    }

    if (paperCount > hIndex) {
      hIndex = paperCount;
    }
    paperCount = 0;
    currentH++;
  }

  return hIndex;
}

// console.log(hIndex([3, 0, 6, 1, 5])); // 3
// console.log(hIndex([0])); // 0
// console.log(hIndex([1])); // 1
// console.log(hIndex([11, 15]));

// o(n) solution
function hIndexOn(citations: number[]): number {
  const totalPaperCount = citations.length;
  const paperCounts = new Array(totalPaperCount + 1).fill(0); // number of papers that have i citations

  for (let i = 0; i < citations.length; i++) {
    paperCounts[Math.min(citations[i], totalPaperCount)] += 1;
  }

  // for example [3, 0, 6, 1, 5]
  // [1, 1, 0, 1, 0, 2]
  // 2 means there are 2 papers with at least 5 citations

  let hIndex = totalPaperCount;
  let papers = paperCounts[totalPaperCount];

  while (papers < hIndex) {
    // this will exit when there are at least N papers at the hIndex
    hIndex -= 1;
    papers += paperCounts[hIndex];
  }

  return hIndex;
}

console.log(hIndexOn([3, 0, 6, 1, 5]));
