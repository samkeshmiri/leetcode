// 138. Copy List with Random Pointer

class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// create map of node value as key, and the next and random as values
// iterate through the LL
//

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();

  let pointer = head;
  while (pointer) {
    map.set(pointer, new _Node(pointer.val)); // do not set next/random yet
    pointer = pointer.next;
  }

  pointer = head;
  while (pointer) {
    const clone = map.get(pointer) ?? null;
    clone.next = map.get(pointer.next) ?? null;
    clone.random = map.get(pointer.random) ?? null;

    pointer = pointer.next;
  }

  return map.get(head) ?? null;
}

const node3 = new _Node(3, null, null);
const node2 = new _Node(2, node3, node3);
const node1 = new _Node(1, node2, node2);

console.log(copyRandomList(node1)); // 1 -> 2 -> 3 with random pointers

// create new node with the values but not the next
// create a new next node and point the current node to it
