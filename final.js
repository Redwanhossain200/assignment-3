//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {

  if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountAmount;

  return priceAfterDiscount.toFixed(3);
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {

  if (typeof otp !== "string") {
    return "Invalid";
  }
  else if (otp.length !== 8) {
    return false;
  }
  else if (otp.startsWith("ph-")) {
    return true;
  } else {
    return false;
  }
}


//Problem-03: BCS Final Score Calculator
function finalScore(omr) {

  if (typeof omr !== "object") {
    return "Invalid";
  }
  if (omr === null) {
    return "Invalid";
  }

  let right = omr.right;
  let wrong = omr.wrong;
  let skip = omr.skip;

  if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number") {
    return "Invalid";
  }

  let total = right + wrong + skip;
  if (total !== 100) {
    return "Invalid";
  }

  let score = right - (wrong * 0.5);
  return Math.round(score);
}


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {

  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let ha = 0;
  let na = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "ha") {
      ha++;
    } else if (array[i] === "na") {
      na++;
    }
  }

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {

  if (typeof str !== "string") {
    return "Invalid";
  }

  if (str.trim() === "") {
    return "Invalid";
  }

  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  let totalChars = str.split(" ").join("").length;

  return {
    longwords: longestWord,
    token: totalChars
  };
}