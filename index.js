class LinkedList {
  constructor(head = null) {
    this._head = head;
    this._tail = head;
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
      currentNode = currentNode.nextNode;
      count++;
    }
    return count;
  }

  at(index) {
    let currentNode = this._head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;

      if (!currentNode) {
        return undefined;
      }
    }
    return currentNode;
  }

  pop() {
    let lastToSecondNodeIndex = this.size() - 2;

    if (lastToSecondNodeIndex >= 0) {
      const lastToSecondNode = this.at(lastToSecondNodeIndex);
      lastToSecondNode.nextNode = null;
      this._tail = lastToSecondNodeIndex;
    }
  }

  contains(value) {
    let currentNode = this._head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
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

console.log(list.at(0));
