// 1)
const celsius = 10;

function converCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
const fahrenheit = converCelsiusToFahrenheit(celsius);

console.log(`${celsius} ცელსიუსი არის ${fahrenheit} ფარენჰეიტი`);

// -----------------------------------------------------------------------

// 2)
let name = "dimitri";

function convertStringToArray(string) {
  let arr = [];
  arr = string.split("");
  return arr;
}

function arrReverse(arr) {
  return arr.reverse();
}

function joinArrayToString(arr) {
  return arr.join("");
}

function reverseString(name) {
  const arr = convertStringToArray(name);
  arrReverse(arr);

  return joinArrayToString(arr);
}
const reversedName = reverseString(name);
console.log(reversedName);

// -----------------------------------------------------------------------

// 3)
let proposal = "me var dimitri";

function countLetters(string) {
  let arrString = string.split(" ");
  let countLetters = arrString.length;

  return countLetters;
}

console.log(countLetters(proposal));

// -----------------------------------------------------------------------

// 4)

const word = "me var dimitri";

function getVowel(string) {
  const vovels = "aeiou";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vovels.includes(string[i])) {
      count++;
    }
  }
  return count;
}

console.log(getVowel(word));

// -----------------------------------------------------------------------

// 5)

function factorial(number) {
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(9));

// -----------------------------------------------------------------------

// 6)

function getEvenNumber(number) {
  let sum = 0;

  for (let i = 0; i <= 10; i++) {
    const isEven = i % 2 === 0;
    if (isEven) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(getEvenNumber(10));

// -----------------------------------------------------------------------

// 7)

function getStudentGrade(grade) {
  let evaluation = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    F: "F",
  };

  if (grade >= 80) {
    return evaluation.A;
  } else if (grade >= 60) {
    return evaluation.B;
  } else if (grade >= 40) {
    return evaluation.C;
  } else if (grade >= 20) {
    return evaluation.D;
  } else {
    return evaluation.F;
  }
}

console.log(getStudentGrade(20));

// -----------------------------------------------------------------------

// 8)

function checkPassword(password) {
  const length = password.length >= 8;
  const includesUppercase = /[A-Z]/.test(password);
  const includeNumber = /[0-9]/.test(password);

  if (length && includesUppercase && includeNumber) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPassword("Dimitri2"));
