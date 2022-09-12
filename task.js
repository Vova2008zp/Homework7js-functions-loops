// Task 1.1
const isAdult1 = function (num) {
  if (num >= 18) {
    return true;
  }
  return false;
};

//Task 1.2
const isAdult2 = function (num) {
  if (isNaN(num) || typeof num !== "number") {
    return null;
  } else if (num >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 1.3
const isAdult3 = function (num) {
  if (isNaN(num) || typeof num !== "number") {
    return null;
  }
  return num >= 18;
};

//Task 2.1
const checkMultiplicity1 = function (num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  }
  return false;
};

//Task 2.2
const checkMultiplicity2 = function (num1, num2) {
  if (isNaN(num1 - num2)) {
    return null;
  } else if (num1 % num2 === 0) {
    return true;
  }
  return false;
};

//Task 2.3
const checkMultiplicity3 = function (num1, num2) {
  if (isNaN(num1 - num2)) {
    return null;
  }
  return num1 % num2 === 0;
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
  if (isNaN(a - b - c)) {
    return null;
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

//Task 3.3
const lengthSideTriangle3 = function (a, b, c) {
  if (isNaN(a - b - c)) {
    return null;
  }
  return a + b < c && a + c < b && b + c < a;
};

//Task 4
const getSumOddNumber = function (num) {
  if (typeof num !== "number" || isNaN(num)) {
    return null;
  }
  let result = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) continue;
    result += i;
  }
  return result;
};

//Task 5
function isPrimeNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return null;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
