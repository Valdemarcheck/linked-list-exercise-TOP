class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  static goToNextNode(node) {
    return node.nextNode;
  }

  append(node) {
    const doesTailExist = this.tail !== null;
    if (doesTailExist) {
      this.tail.nextNode = node;
    }
    this.tail = node;
  }

  prepend(node) {
    const doesHeadExist = this.head !== null;
    if (doesHeadExist) {
      node.nextNode = this.head;
    }
    this.head = node;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = LinkedList.goToNextNode(currentNode);
      count++;
    }
    return count;
  }
}

class Node {
  constructor({ value = null, nextNode = null }) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList(new Node({ value: 10 }));
list.append(new Node({ value: 20 }));
list.prepend(new Node({ value: 0 }));
console.log(list.size());
