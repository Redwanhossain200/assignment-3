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

// console.log(gonoVote(["ha", "na", "ha", "na"]));
// console.log(gonoVote(["ha", "na", "na"]));
// console.log(gonoVote(["ha", "ha", "ha", "na"]));
// console.log(gonoVote("ha, na"));
// console.log(gonoVote(12345));