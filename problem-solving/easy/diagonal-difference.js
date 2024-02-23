function diagonalDifference(
  arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]
) {
  let rtl = 0;
  let ltr = 0;

  arr.forEach((rowVal, rowIdx) => {
    rowVal.forEach((colVal, colIdx) => {
      rtl = colIdx === rowIdx ? rtl + colVal : rtl;
      ltr = colIdx === arr.length - rowIdx - 1 ? ltr + colVal : ltr;
    });
  });

  return Math.abs(rtl - ltr);
}
