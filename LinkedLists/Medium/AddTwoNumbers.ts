// 2. Add Two Numbers

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let current = dummy;

  let carry = 0;

  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let sum = v1 + v2 + carry;
    current.next = new ListNode(sum % 10); // 15%10=5 -- our list node value
    carry = Math.floor(sum / 10); // 15/10=1 -- our carry

    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

// console.log(addTwoNumbers(new ListNode(2), new ListNode(5))); // 7
console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4)),
    new ListNode(5, new ListNode(6))
  )
); // 7 -> 0 -> 1
