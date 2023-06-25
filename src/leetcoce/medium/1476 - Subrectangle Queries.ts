class SubrectangleQueries {
  constructor(rectangle: number[][]) {}

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {}

  getValue(row: number, col: number): number {}
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

[
  "SubrectangleQueries",
  "getValue",
  "updateSubrectangle",
  "getValue",
  "getValue",
  "updateSubrectangle",
  "getValue",
  "getValue",
][
  ([
    [
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ],
  ],
  [0, 2],
  [0, 0, 3, 2, 5],
  [0, 2],
  [3, 1],
  [3, 0, 3, 2, 10],
  [3, 1],
  [0, 2])
];
Output[(null, 1, null, 5, 5, null, 10, 5)];
