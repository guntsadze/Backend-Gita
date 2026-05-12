const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
let avarage = 0;

function getAvarage(arr) {
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
    avarage = sum / numArr.length;
  }
  return avarage;
}

console.log(getAvarage(numArr));

let number = 35231;

let stgNumbers = number.toString().split("");
let numArr = [];

function getReverseArr(number) {
  for (let i = stgNumbers.length - 1; i >= 0; i--) {
    numArr.push(stgNumbers[i] * 1); // მიმატების გარდა ყველა მათემათიკური ოპერაცია სტრინგს აქცევს რიცხვად
  }
  return numArr;
}

// console.log(getReverseArr(number));

let a = [1, 2, 2, 2, 3, 6, 13];
let b = [2];

let diffNumbersArr = [];

// ორივე შემთხვევაში იმუშავებს ახლა
// მეორე ცილკი რო არ დამეწერა for მხოლოდ
// 1 ხელ გადაურბენდა მასივს და ვერ გავიგებდით
function getDiffNumbers(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      diffNumbersArr.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      diffNumbersArr.push(b[i]);
    }
  }
  return diffNumbersArr;
}

// console.log(getDiffNumbers(a, b));

// const numArr = [50, 4, 3, 5, , 300, 2, 1, 10, 100, 110];

let maxNumber = numArr[0];
let secondMaxNumber = 0;

function getSecondMaxNumber(arr) {
  for (let i = 0; i < numArr.length; i++) {
    if (maxNumber < numArr[i]) {
      secondMaxNumber = maxNumber;
      maxNumber = numArr[i];
    } else if (numArr[i] > secondMaxNumber && numArr[i] < maxNumber) {
      secondMaxNumber = numArr[i];
    }
  }
  return secondMaxNumber;
}

// console.log(getSecondMaxNumber(numArr));

// const arr = ["mom", "car", "level", "dog"];

let palindrom = [];

function getPalindrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    let original = arr[i];
    let reverse = arr[i].split("").reverse().join("");
    console.log("🚀 ~ reverse:", reverse);

    if (reverse === original) {
      palindrom.push(arr[i]);
    }
  }
  return palindrom;
}

// console.log(getPalindrom(arr));

const arr = [7, 7, 3, 8, 8, 8, 100, 100, 100, 100, 100];

function getRepetitiveNumber(arr) {
  let counts = [];
  let maxCount = 0;
  let mostFrequent;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    counts[num] = (counts[num] || 0) + 1;

    if (counts[num] > maxCount) {
      console.log(counts[num]);

      maxCount = counts[num];
      mostFrequent = num;
    } else {
    }
  }
  //   console.log(counts);
  //   console.log(maxCount);

  return mostFrequent;
}

// console.log(getRepetitiveNumber(arr));
