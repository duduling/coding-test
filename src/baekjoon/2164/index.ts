// For Test with Example
export const input = `6`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  class Node {
    value: number = NaN;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(value: number) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }

  class LinkedList {
    head: Node | null = null;
    tail: Node | null = null;
    _size: number = 0;

    constructor() {
      this.head = null;
      this.tail = null;
      this._size = 0;
    }

    add(newNode: Node) {
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
      this._size += 1;

      return newNode;
    }

    getHeadValue() {
      return this.head.value;
    }

    removeHead() {
      this.head = this.head.next;
      // Error: Cannot set properties of null
      if (this.head) {
        this.head.prev = null;
      }
      this._size -= 1;
    }

    getSize() {
      return this._size;
    }
  }

  // Initial Setting
  const n: number = +input.shift();

  // Logic
  const linkedList = new LinkedList();

  for (let i = 1; i <= n; i++) {
    linkedList.add(new Node(i));
  }

  while (1 < linkedList._size) {
    linkedList.removeHead();
    const tempHead = linkedList.getHeadValue();
    linkedList.removeHead();
    linkedList.add(new Node(tempHead));
  }

  console.log(linkedList.getHeadValue());
};
solution(input);
