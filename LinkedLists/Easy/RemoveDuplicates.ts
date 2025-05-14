// 83. Remove Duplicates from Sorted List

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr) {
    const nextNode = curr.next;
    if (nextNode) {
      if (curr.val == nextNode.val) {
        curr.next = nextNode.next;
      } else {
        curr = curr.next;
      }
    } else {
      break;
    }
  }

  return head;
}

const head = new ListNode(1, new ListNode(1, new ListNode(2)));

console.log(deleteDuplicates(head));
