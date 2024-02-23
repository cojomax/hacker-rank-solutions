function climbingLeaderboard(ranked, player) {

    const ranks = [];
    const uniq = [...new Set(ranked)];
  
    player.forEach((ps) => {
      const index = binarySearch(uniq, ps);
      ranks.push(index + 1);
    });
  
    return ranks;
  
    function binarySearch(arr, val) {
      let lower = 0;
      let upper = arr.length - 1;
      let mid = null;
  
      while (lower <= upper) {
        mid = Math.floor((lower + upper) / 2);
        if (val > arr[mid]) {
          if (lower === upper && lower === mid) {
            return mid;
          }
          upper = mid - 1;
        } else if (val < arr[mid]) {
          if (lower === upper && lower === mid) {
            return mid + 1;
          }
          lower = mid + 1;
        } else {
          return mid;
        }
      }
      return mid;
    }
  }