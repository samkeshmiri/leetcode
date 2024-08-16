class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head: ListNode | null;
  let current: ListNode | null;

  // doesn't matter if both are null
  if (!list1) return list2;
  if (!list2) return list1;

  // define head to return at the end
  if (list1.val > list2.val) {
    head = list2;
    list2 = list2.next;
  } else {
    head = list1;
    list1 = list1.next;
  }

  // use current to continue from head
  current = head;

  // traverse both
  while (list1 && list2) {
    // set  
    if (list1.val > list2.val) {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    } else {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    }
  }

  current.next = list1 === null ? list2 : list1;

  return head;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists(null, null));
