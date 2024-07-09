export class LinkedListNode {
  data: any;
  nextNode: LinkedListNode;

  constructor(data: any) {
    this.data = data;
  }
}

export class LinkedList {
  private firstNode: LinkedListNode;

  constructor(firstNode: LinkedListNode) {
    this.firstNode = firstNode;
  }

  read(index: number) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    if (currentNode) {
      return currentNode.data;
    }

    return undefined;
  }

  // returns index where data is found
  search(data: any) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.data == data) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return undefined;
  }

  insert(index: number, data: any) {
    const newNode = new LinkedListNode(data);

    if (index === 0) {
      newNode.nextNode = this.firstNode;
      this.firstNode = newNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    // get to the spot before where the node will go
    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    return newNode;
  }

  delete(index: number) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
    currentNode.nextNode = null;
  }

  logAllNodeData() {
    let currentNode = this.firstNode;
    if (!currentNode) {
      console.log("no nodes");
    }

    while (currentNode) {
      console.log(currentNode.data);
      if (currentNode.nextNode != undefined) {
        currentNode = currentNode.nextNode;
      } else {
        break;
      }
    }
  }

  getLastElement() {
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        continue;
      } else {
        return currentNode;
      }
    }
  }

  reverseLinkedList() {
    let current = this.firstNode;
    let previous = null;
    let next = null;
    while (current) {
      next = current.nextNode; // Save next node
      current.nextNode = previous; // Reverse current node's pointer
      previous = current; // Move pointers one position ahead
      current = next;
    }
    this.firstNode = previous; // Set the last node as the new first node
    this.logAllNodeData();
  }

  // current node data = next node
  // current next node = next node.next node
  deleteNode(node: LinkedListNode) {
    const nextNode = node.nextNode; // node to delete

    if (!nextNode) {
      return (node = null); // delete current node
    }

    node.nextNode = nextNode.nextNode;
    node = nextNode;

    console.log(this.logAllNodeData());
    this.firstNode;
    return node;
  }
}

// const node1 = new LinkedListNode("node_one");
// const node2 = new LinkedListNode("node_two");
// const node3 = new LinkedListNode("node_three");
// node1.nextNode = node2;
// node2.nextNode = node3;

// const ll = new LinkedList(node1);
// ll.insert(3, "node_four");

// // console.log(ll.read(1));
// // console.log(ll.search("node_three"));
// // console.log(ll.read(6));

// // ll.logAllNodeData();
// // ll.getLastElement();
// // ll.reverseLinkedList();
// ll.deleteNode(node2);
