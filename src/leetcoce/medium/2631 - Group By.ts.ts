declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function <T>(
  fn: (item: T) => string
): Record<string, T[]> {
  return this.reduce((acc: Record<string, T[]>, val: T) => {
    const key = fn(val);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(val);

    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
