// Task 1
const isAdult = function (num) {
  if (num >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isAdult(20);
isAdult(4);

//Task 2
const checkMultiplicity = function (num1, num2) {
  if (num1 % num2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkMultiplicity(25, 5);
checkMultiplicity(15, 3);
checkMultiplicity(15, 5);
checkMultiplicity(15, 4);

//Task 3
const lengthSideTriangle = function (a, b, c) {
  if (a + b > c && a + c > b && b + c > a) console.log(true);
  else {
    console.log(false);
  }
};

lengthSideTriangle(5, 5, 3);

