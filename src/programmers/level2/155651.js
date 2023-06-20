// #region - 호텔 대실
const calcToMin = (timeStr) => {
  const [hour, minute] = timeStr.split(":").map(Number);
  return hour * 60 + minute;
};

const solution = (book_time_list) => {
  const bookThread = new Map();

  for (const [checkInTime, checkOutTime] of book_time_list) {
    let convertMinCheckInTime = calcToMin(checkInTime);
    const convertMinCheckOutTime = calcToMin(checkOutTime);

    while (convertMinCheckInTime < convertMinCheckOutTime + 10) {
      bookThread.set(
        convertMinCheckInTime,
        (bookThread.get(convertMinCheckInTime) || 0) + 1
      );
      convertMinCheckInTime += 1;
    }
  }

  return Math.max(...bookThread.values());
};
// #endregion

// 2
console.log(
  solution([
    ["08:00", "08:30"],
    ["08:00", "13:00"],
    ["12:30", "13:30"],
  ])
);
// 3
console.log(
  solution([
    ["05:57", "06:02"],
    ["04:00", "06:59"],
    ["03:56", "07:57"],
    ["06:12", "08:55"],
    ["07:09", "07:11"],
  ])
);
// 3
console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
// 1
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
);
// 3
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
);
