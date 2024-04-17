// For Test with Example
export const input = `9
0
12345678
1
2
0
0
0
0
32`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

class MinHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value: number) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;

    while (
      this.heap[leftChildIndex] !== undefined &&
      (this.heap[currentIndex] > this.heap[leftChildIndex] ||
        this.heap[currentIndex] > this.heap[rightChildIndex])
    ) {
      let smallerChildIndex = leftChildIndex;
      if (
        this.heap[rightChildIndex] !== undefined &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
    }

    return top;
  }
}

// My Code
const solution = (input: string[]) => {
  const n = +input[0];
  const minHeap = new MinHeap();
  const answer = [];

  for (let i = 1; i <= n; i++) {
    const curNum = +input[i];
    if (curNum === 0) {
      answer.push(minHeap.pop());
    } else {
      minHeap.push(curNum);
    }
  }

  return answer.join("\n");
};

console.log(solution(input));
