function solution(n, wires) {
  let minDifference = n;

  function createGraph(excludeEdge) {
    const graph = new Map();

    for (let i = 1; i <= n; i++) {
      graph.set(i, []);
    }

    wires.forEach((wire, index) => {
      if (index !== excludeEdge) {
        const [v1, v2] = wire;
        graph.get(v1).push(v2);
        graph.get(v2).push(v1);
      }
    });

    return graph;
  }

  function countConnectedNodes(graph, start, visited) {
    visited.add(start);
    let count = 1;

    const neighbors = graph.get(start) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        count += countConnectedNodes(graph, neighbor, visited);
      }
    }

    return count;
  }

  wires.forEach((_, index) => {
    const graph = createGraph(index);
    const visited = new Set();

    const count = countConnectedNodes(graph, 1, visited);

    const diff = Math.abs(count - (n - count));
    minDifference = Math.min(minDifference, diff);
  });

  return minDifference;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );
// console.log(
//   solution(7, [
//     [1, 2],
//     [2, 7],
//     [3, 7],
//     [3, 4],
//     [4, 5],
//     [6, 7],
//   ])
// );
