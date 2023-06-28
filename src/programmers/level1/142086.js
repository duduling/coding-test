function solution(s) {
  const cacheMap = new Map();

  return s.split("").reduce((acc, cur, idx) => {
    let result = -1;

    if (cacheMap.has(cur)) {
      result = idx - cacheMap.get(cur);
    }

    cacheMap.set(cur, idx);
    acc.push(result);

    return acc;
  }, []);
}
