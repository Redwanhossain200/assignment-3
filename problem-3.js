function finalScore(omr) {
  if (typeof omr !== 'object') {
    return 'Invalid';
  }
  if (omr === null) {
    return 'Invalid';
  }

  let right = omr.right;
  let wrong = omr.wrong;
  let skip = omr.skip;

  if (
    typeof right !== 'number' ||
    typeof wrong !== 'number' ||
    typeof skip !== 'number'
  ) {
    return 'Invalid';
  }

  let total = right + wrong + skip;
  if (total !== 100) {
    return 'Invalid';
  }

  let score = right - wrong * 0.5;
  return Math.round(score);
}

// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
// console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
// console.log(finalScore("!@#"));
// console.log(finalScore(["Raj"]));
