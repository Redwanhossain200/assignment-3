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


// console.log(typeof validOtp("ph-10985"));
// console.log(validOtp("ph-1234"));
// console.log(validOtp("abc-12345"));
// console.log(validOtp(["ph-10985"]));
// console.log(validOtp(12345678));
// console.log(validOtp("rh-378398"));