// let saxeli = "dimitri";
// let axaliSaxeli = "";

// let daxlechilimasivi = saxeli.split("");

// for (i = daxlechilimasivi.length - 1; i >= 0; i -= 1) {
//   axaliSaxeli += daxlechilimasivi[i] + " ";
// }

// console.log(axaliSaxeli);

// const nums = [10, 25, 5, 30, 12];

// // console.log(nums.filter((num) => console.log(num)));

// const bigNumbers = nums.filter(function (n) {
//   if (n > 20) {
//     return true; // თუ პირობა სრულდება, ელემენტი გადადის ახალ მასივში
//   } else {
//     return false; // თუ არ სრულდება, ელემენტი იკარგება
//   }
// });

// console.log(bigNumbers); // შედეგი: [25, 30]

// const prices = [10, 55, 80, 120, 15, 200];

// let discount = [];

// prices.map((price) => {
//   discount.push(price * 0.8);
// });

// console.log(discount);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let square = numbers
//   .filter((num) => (num % 2 === 0 ? true : false))
//   .map((evNum) => evNum * 2);

// console.log(square);

// const cart = [5.99, 10, 15.5, 22.1, 3];

// let total = cart.reduce((total, price) => {
//   return total + price;
// }, 0);

// console.log(total);

// const guests = ["Dimitri", "Ana", "Dimitri", "Lasha", "Ana", "Mariami"];

// const set = new Set(guests);

// const arr = [...set].join(",");

// console.log("🚀 ~ set:", arr);

// const sentence = "მე ვსწავლობ პროგრამირებას JavaScript weqewcxwwccwwdcwd";

// const arr = sentence.split(" ");

// let longestword = arr.reduce((longestword, word) => {
//   return word.length > longestword.length
//     ? (longestword = word)
//     : (longestword = longestword);
// }, "");

// console.log(longestword);

// const students = [
//   {
//     id: 1,
//     name: "diMiTri",
//     subjects: ["Math", "Physics", "Math"],
//     scores: [80, 90, 70],
//   },
//   {
//     id: 2,
//     name: "  anA  ",
//     subjects: ["Biology", "Math", "Biology"],
//     scores: [100, 95],
//   },
//   {
//     id: 3,
//     name: "lasha",
//     subjects: ["Physics", "Chemistry"],
//     scores: [60, 50, 70, 80],
//   },
// ];

// let studentsMap = students
//   .map((student) => {
//     let removeSpaces = student.name.trim();

//     let firstLetterUppercase = removeSpaces.toLowerCase().at(0).toUpperCase();

//     let formattedName =
//       firstLetterUppercase + removeSpaces.toLowerCase().slice(1);

//     let unniqueSubject = new Set(student.subjects);

//     let totalScore = student.scores.reduce((total, score) => {
//       return total + score;
//     }, 0);

//     let avarageScore = totalScore / student.scores.length;

//     return {
//       id: student.id,
//       name: formattedName,
//       subjects: [...unniqueSubject],
//       avarage: avarageScore,
//     };
//   })
//   .filter((student) => {
//     return student.avarage > 70;
//   });

// console.log(studentsMap);

// const inventory = [
//   { name: "Laptop", category: "Electronics", price: 1500, stock: 4 },
//   { name: "Mouse", category: "Electronics", price: 50, stock: 0 },
//   { name: "Desk", category: "Furniture", price: 300, stock: 10 },
//   { name: "Chair", category: "Furniture", price: 150, stock: 2 },
//   { name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { name: "Lamp", category: "Furniture", price: 40, stock: 0 },
// ];

// let filtered = inventory.filter((i) => (i.stock > 0 ? true : false));

// let addedType = filtered.map((i) =>
//   i.price > 500 ? { ...i, type: "Premium" } : { ...i, type: "Standart" },
// );

// let totalPrice = addedType.reduce((total, stock) => {
//   return total + stock.stock * stock.price;
// }, 0);
// console.log("🚀 ~ totalPrice:", totalPrice);

// let nums = [20, 44, 15, 61, 45, 78, 90, 11, 21];

// let maxNumber = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (maxNumber < nums[i]) {
//     maxNumber = nums[i];
//   }
// }

// console.log("🚀 ~ maxNumber:", maxNumber);

// for (let i = 1; i <= 10; i++) {
//   nums.push(i);
// }

// console.log(nums);

// const arr = [1, "2", false, 3, {}, [1, 2], "test", 4];

// let numsArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     numsArr.push(arr[i]);
//   }
// }

// console.log("🚀 ~ numsArr:", numsArr);

// const nums = [21, 12, 21, 44, 34, 12, 65, 89, 9, 44];

// const uniqueNms = [];

// for (let i = 0; i < nums.length; i++) {
//   if (!uniqueNms.includes(nums[i])) {
//     uniqueNms.push(nums[i]);
//   }
// }

// console.log("🚀 ~ uniqueNms:", uniqueNms);

// const nums = [1, 3, 5, 2, 112, 22, 42, 35, 89];

// const evens = [];
// const odds = [];

const nums = [12, 21, 12, 43, 55, 68, 92, 55, 2];

let sum = 0;
const uniqueNms = [];

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNms.includes(nums[i])) {
    uniqueNms.push(nums[i]);
    sum += nums[i];
  }
}

console.log("🚀 ~ sum:", sum);
