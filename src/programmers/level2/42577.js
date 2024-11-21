function solution(phone_book) {
  const hashMap = new Set(phone_book);

  for (let phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i += 1) {
      const prefix = phoneNumber.slice(0, i);

      if (hashMap.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"], false));
console.log(solution(["123", "456", "789"], true));
console.log(solution(["12", "123", "1235", "567", "88"], false));
