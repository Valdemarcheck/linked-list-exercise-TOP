class LinkedList {
  constructor(head = null) {
    this._head = head;
    this._tail = head;
  }

  static goToNextNode(node) {
    return node.nextNode;
  }

  append(node) {
    const doesTailExist = this._tail !== null;
    if (doesTailExist) {
      this._tail.nextNode = node;
    }
    this._tail = node;
  }

  prepend(node) {
    const doesHeadExist = this._head !== null;
    if (doesHeadExist) {
      node.nextNode = this._head;
    }
    this._head = node;
  }

  size() {
    let count = 0;
    let currentNode = this._head;

    while (currentNode) {
      currentNode = LinkedList.goToNextNode(currentNode);
      count++;
    }
    return count;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
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

console.log(list.head);
console.log(list.tail);
