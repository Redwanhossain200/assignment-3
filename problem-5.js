function analyzeText(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }

  if (str.trim() === '') {
    return 'Invalid';
  }

  let words = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  let totalChars = str.split(' ').join('').length;

  return {
    longwords: longestWord,
    token: totalChars,
  };
}

// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText("Hello world"));
// console.log(analyzeText("Keep coding keep shining"));
// console.log(analyzeText(12345));
// console.log(analyzeText("Programming is fun"));
// console.log(analyzeText("A quick brown fox"));
// console.log(analyzeText(" "));
