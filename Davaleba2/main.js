// 1)
const name = "Dimitri Guntsadze";

function getAbbr(name) {
  let arr = name.split(" ");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0] + ".";
  }

  return result.slice(0, -1);
}

// console.log(getAbbr(name));

// -----------------------------------------------------------------------

// 2)
const number = 54321;

function getSumOfDigit(number) {
  const arr = number.toString().split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

// console.log(getSumOfDigit(number));

// -----------------------------------------------------------------------

// 3)
const str = "banana";
function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.includes(str[i])) continue;
    result += str[i];
  }
  return result;
}

// console.log(removeDuplicates(str));

// -----------------------------------------------------------------------

// 4)
const str2 = "1 2 aab";

function removeSpaces(str) {
  let arr = str.split(" ");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// console.log(removeSpaces(str2));

// -----------------------------------------------------------------------

// 5)
const str3 = "dimitri guntsadze";

function reverseEachWord(words) {
  const arr = words.split("");
  let result = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

// console.log(reverseEachWord(str3));
