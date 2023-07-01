function solution(name, yearning, photo) {
  const pointTableMap = new Map(name.map((name, idx) => [name, yearning[idx]]));

  return photo.map((nameList) =>
    nameList.reduce((acc, name) => acc + (pointTableMap.get(name) || 0), 0)
  );
}
