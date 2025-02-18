// 148. Sort List

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// merge sort algorithm
function sortList(head: ListNode | null): ListNode | null {
  // base case, return when head is null. i.e the list has been split to a single node.
  if (head === null || head.next === null) {
    return head;
  }

  // divide and conquer the list
  let left = head;
  let right = getMid(head);
  let temp = right.next;
  right.next = null;
  right = temp;

  left = sortList(left);
  right = sortList(right);
  return merge(left, right);

  function getMid(head: ListNode | null) {
    // turtle and hair
    let slow = head; // 1x speed
    let fast = head.next; // 2x speed

    // we only care if fast still exists because slow will always exist when fast is 2x jumps ahead
    while (fast && fast.next) {
      slow = slow.next; // moves along 1
      fast = fast.next.next; // moves along 2
    }

    // the slow will be halfway along the list compared to fast which will be at the end
    // so we can return the slow node which is the list size / 2
    return slow; // mid value
  }

  // analogy: think of this like a train
  // the dummy is the engine—we want to know where the engine is so we can return the first carriage after it
  function merge(list1: ListNode | null, list2: ListNode | null) {
    let tail = new ListNode(); // we will be adding nodes (carriages) from this point
    let dummy = tail; // we want to keep a reference to the tail so we know that dummy.next is the beginning of the train

    // we check whether we are still sorting
    while (list1 && list2) {
      if (list1.val < list2.val) {
        tail.next = list1; // we set the next carriage (sorted which value is higher in the lists)
        list1 = list1.next; // once we've sorted the values, we move along to the next value we need to sort
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }
    // once we've reached null, we can just add the remaining list to the tail
    if (list1) tail.next = list1;
    if (list2) tail.next = list2;

    // we do not return dummy because it points to null
    // we do not return tail because that returns only the last node in the train
    return dummy.next;
  }
}

const root = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3)))); // 1, 2, 3, 4

console.log(sortList(root));
