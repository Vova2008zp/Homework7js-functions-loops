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
    console.log(null);
  } else if (num >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
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
    console.log(null);
  } else if (num1 % num2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 3.1
const lengthSideTriangle = function (a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Task 3.2
const lengthSideTriangle2 = function (a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log(null);
  } else if (a + b > c && a + c > b && b + c > a) {
    console.log(true);
  } else {
    console.log(false);
  }
};
