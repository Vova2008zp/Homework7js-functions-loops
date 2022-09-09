// Task 1.1
const isAdult = function (num) {
  if (num >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 1.2
const isAdult2 = function (num) {
  if (isNaN(num) && typeof num !== "number") {
    return null;
  } else if (num >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 1.3
const isAdult3 = function (num) {
  if (isNaN(num) && typeof num !== "number") {
    return null;
  }
  num >= 18 ? console.log(true) : console.log(false);
};

//Task 2.1
const checkMultiplicity = function (num1, num2) {
  if (num1 % num2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 2.2
const checkMultiplicity2 = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  } else if (num1 % num2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 2.3
const checkMultiplicity3 = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }
  num1 % num2 === 0 ? console.log(true) : console.log(false);
};

//Task 3.1
const lengthSideTriangle = function (a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

//Task 3.2
const lengthSideTriangle2 = function (a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return null;
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

//Task 3.3
const lengthSideTriangle3 = function (a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return null;
  }
  a + b > c && a + c > b && b + c > a ? console.log(true) : console.log(false);
};

//Task 4

const getSumOddNumber = function (num) {
  let result = 0;
  debugger;
  for (let i = 1; i < num; i++) {
    result = num + i;
    if(result % 2 === 0) continue;
    else { result +=result};
  }
  // return result;
};

//Task 5
function isPrimeNumber(num) {
  // debugger
  for (let i = 2; i < num; i++) {
    if ( num % i === 0) return false;
  }
  return true;
}