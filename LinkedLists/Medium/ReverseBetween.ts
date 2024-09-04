function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) return head;

  let counter = 1;
  let currentNode = head;
  let previousNode: ListNode | null = null;

  // traverse to node at left position
  while (counter < left) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    counter++;
  }

  const leftPredecessor = previousNode; // node before reversed portion
  const newEnd = currentNode; // end of the reversed portion

  let [newStart, nextNode] = reversePortion(currentNode, left, right);

  // re-connect reversed portion
  if (leftPredecessor) { // if left != 1
    leftPredecessor.next = newStart; // left - 1 node connected to start of reversed portion
  } else {
    head = newStart; // if left is 1
  }

  newEnd.next = nextNode; // connect end of reversed portion to next node of the last node of the reversed portion

  return head;
}

function reversePortion(current: ListNode, start: number, end: number) {
  let next = null;
  let previous = null;

  while (start <= end && current) {
    next = current.next; // Save next node
    current.next = previous; // Reverse current node's pointer
    previous = current; // Move pointers one position ahead
    current = next;
    start++;
  }

  return [previous, current];
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(reverseBetween(head, 2, 4)); // Expected: 1 -> 4 -> 3 -> 2 -> 5
