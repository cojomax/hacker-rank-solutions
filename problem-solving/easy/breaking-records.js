function breakingRecords(scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) {
  let maxBreaks = 0;
  let minBreaks = 0;

  let min = scores[0];
  let max = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      maxBreaks++;
    }
    if (scores[i] < min) {
      min = scores[i];
      minBreaks++;
    }
  }

  return [maxBreaks, minBreaks];
}
