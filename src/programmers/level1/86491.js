function solution(sizes) {
  const longList = [];
  const shortList = [];

  sizes.forEach(([w, h]) => {
    if (0 < w - h) {
      longList.push(w);
      shortList.push(h);
    } else {
      longList.push(h);
      shortList.push(w);
    }
  });

  return Math.max(...longList) * Math.max(...shortList);
}
