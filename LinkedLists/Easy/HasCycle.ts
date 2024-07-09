/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { LinkedListNode } from "../LinkedList";

function hasCycle(head: LinkedListNode | null): boolean {
  if (head === null || head.nextNode === undefined) {
    return false;
  }

  let turtle = head;
  let hare = turtle.nextNode.nextNode;
  while (turtle.nextNode) {
    if (!turtle.nextNode || !hare.nextNode || !hare.nextNode.nextNode) {
      return false;
    }
    if (turtle.data == hare.data) {
      return true;
    }
    turtle = turtle.nextNode;
    hare = hare.nextNode.nextNode;
  }

  return false;
}

// true
// const node1 = new LinkedListNode("node_one");
// const node2 = new LinkedListNode("node_two");
// const node3 = new LinkedListNode("node_three");
// node1.nextNode = node2;
// node2.nextNode = node3;
// node3.nextNode = node1;

// false
const node1 = new LinkedListNode("node_one");
const node2 = new LinkedListNode("node_two");
const node3 = new LinkedListNode("node_three");
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = undefined;

console.log(hasCycle(node1));
