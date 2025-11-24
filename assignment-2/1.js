function checkNumber(num) {

  if (num % 2 === 0) {
    if (num === 0) {
      return console.log("num is even and since it's zero, it's not divisible by 3 and 5");
    }

    if (num < 0) {
      if (num % 5 === 0 && num % 3 === 0) {
        return console.log("num is even, negative and divisible by 5 & 3");
      } else {
        return console.log("num is even, negative and not divisible by 5 & 3");
      }
    } else {
      if (num % 5 === 0 && num % 3 === 0) {
        return console.log("num is even, positive and divisible by 5 & 3");
      } else {
        return console.log("num is even, positive and not divisible by 5 & 3");
      }
    }
  } 
  
  else {
  
    if (num < 0) {
      if (num % 5 === 0 && num % 3 === 0) {
        return console.log("num is odd, negative and divisible by 5 & 3");
      } else {
        return console.log("num is odd, negative and not divisible by 5 & 3");
      }
    } else {
      if (num % 5 === 0 && num % 3 === 0) {
        return console.log("num is odd, positive and divisible by 5 & 3");
      } else {
        return console.log("num is odd, positive and not divisible by 5 & 3");
      }
    }
  }
}


checkNumber(-9);