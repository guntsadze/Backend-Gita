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

// const nums = [12, 21, 12, 43, 55, 68, 92, 55, 2];

// let sum = 0;
// const uniqueNms = [];

// for (let i = 0; i < nums.length; i++) {
//   if (!uniqueNms.includes(nums[i])) {
//     uniqueNms.push(nums[i]);
//     sum += nums[i];
//   }
// }

// console.log("🚀 ~ sum:", sum);

// const nums = [1, 2, 3, 4, 5, 6, 7];

// nums.shift(5);

// console.log("🚀 ~ nums:", nums);

// const deletedItem = nums.slice(1, 4);
// console.log("🚀 ~ deletedItem:", deletedItem);

// const nums = [2, 55, 12, 3, 41, 87];

// const result = nums.map((num) => num * 2).filter((num) => num % 3 === 0);

// console.log(result);

// const nums = [2, -55, -12, 3, 41, 87];

// const result = nums.reduce((total, num) => (num > 0 ? total + num : total), 0);

// console.log(result);

// function reverseString(strg) {
//   return strg.split("").reverse().join("");
// }

// console.log(reverseString("dimitri"));

// function reverseString(str) {
//   for (let i)
// }

// const transactions = [
//   { amount: 10, currency: "USD" },
//   { amount: 20, currency: "EUR" },
//   { amount: 5, currency: "USD" },
//   { amount: 50, currency: "EUR" },
// ];

// const result = transactions.reduce((prev, { amount, currency }) => {
//   if (!prev[currency]) {
//     prev[currency] = { amount };
//   } else {
//     prev[currency].amount += amount;
//   }

//   return prev;
// }, {});

// console.log(result);

// const arr = ["one", "two", "three"];

// const result = arr.map((r) => r.slice(0, -1));

// console.log(result);

// const transactions = [
//   { amount: 10, currency: "USD" },
//   { amount: 20, currency: "EUR" },
//   { amount: 5, currency: "USD" },
//   { amount: 50, currency: "EUR" },
// ];

// const result = transactions.reduce((prev, curr) => {
//   const { currency, amount } = curr;
//   if (!prev[currency]) {
//     prev[currency] = amount;
//   } else {
//     prev[currency] += amount;
//   }
//   return prev;
// }, {});

// console.log(result);

// const product = [
//   { name: "Apple", type: "fruit" },
//   { name: "Broccoli", type: "vegetable" },
//   { name: "Banana", type: "fruit" },
//   { name: "Banana", type: "fruit" },
//   { name: "Banana", type: "fruit" },
// ];

// const result = product.reduce((prev, curr) => {
//   const { type } = curr;

//   if (!prev[type]) {
//     prev[type] = 1;
//   } else {
//     prev[type] += 1;
//   }

//   return prev;
// }, {});

// console.log(result);

// const numArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const result = numArr.reduce((prev, curr) => {
//   return (prev = [...prev, ...curr]);
// }, []);

// console.log(result);

// const cart = [
//   { item: "Books", price: 30 },
//   { item: "Laptop", price: 1200 },
//   { item: "Mouse", price: 25 },
// ];

// const result = cart.reduce((prev, curr) =>
//   prev.price > curr.price ? prev : curr,
// );

// console.log(result);

// const wordsArr = ["js", "html", "js", "css", "js", "html"];

// const result = wordsArr.reduce((prev, curr) => {
//   console.log("🚀 ~ curr:", { curr });

//   if (!prev[curr]) {
//     prev[curr] = 1;
//   } else {
//     prev[curr] += 1;
//   }

//   return prev;
// }, {});

// console.log(result);

// const arr = ["a", "b", "a", "c", "b", "a"];

// const result = arr.reduce((prev, curr) => {
//   if (!prev[curr]) {
//     prev[curr] = 1;
//   } else {
//     prev[curr] += 1;
//   }

//   return prev;
// }, {});

// console.log(result);

// const arr = [
//   { task: "Clean", status: "done" },
//   { task: "Cook", status: "pending" },
//   { task: "Read", status: "done" },
// ];

// const result = arr.reduce((prev, curr) => {
//   const { status } = curr;
//   if (!prev[status]) {
//     prev[status] = 1;
//   } else {
//     prev[status]++;
//   }
//   return prev;
// }, {});

// console.log(result);

// const nums = [10, 55, 20, 80, 45];

// const result = nums.reduce((prev, curr) => {
//   if (curr >= 51) {
//     status = "passed";
//   } else {
//     status = "failed";
//   }

//   if (!prev[status]) {
//     prev[status] = 1;
//   } else {
//     prev[status] += 1;
//   }
//   return prev;
// }, {});

// console.log(result);

// const inventory = [
//   //{ Electronics: 15, Food: 50, Furniture: 2 }
//   { name: "Phone", category: "Electronics", stock: 5 },
//   { name: "Laptop", category: "Electronics", stock: 10 },
//   { name: "Apple", category: "Food", stock: 50 },
//   { name: "Table", category: "Furniture", stock: 2 },
// ];

// const result = inventory.reduce((prev, curr) => {
//   const { category, stock } = curr;
//   if (!prev[category]) {
//     prev[category] = 0;
//   }
//   prev[category] += stock;

//   return prev;
// }, {});

// console.log(result);

// const cities = [
//   //    { Georgia: 1270000, France: 2600000 }
//   { name: "Tbilisi", country: "Georgia", pop: 1100000 },
//   { name: "Batumi", country: "Georgia", pop: 170000 },
//   { name: "Paris", country: "France", pop: 2100000 },
//   { name: "Lyon", country: "France", pop: 500000 },
// ];

// const result = cities.reduce((prev, curr) => {
//   const { country, pop } = curr;

//   if (!prev[country]) {
//     prev[country] = 0;
//   }

//   prev[country] += pop;

//   return prev;
// }, {});

// console.log(result);

// const movies = ["Action", "Comedy", "Action", "Drama", "Action", "Comedy"];

// const result = movies.reduce((prev, curr) => {
//   if (!prev[curr]) {
//     prev[curr] = 1;
//   } else {
//     prev[curr]++;
//   }

//   return prev;
// }, {});

// console.log(result);

// const expenses = [
//   // { Food: 80, Rent: 2000 }
//   { category: "Food", amount: 50 },
//   { category: "Rent", amount: 1000 },
//   { category: "Food", amount: 30 },
//   { category: "Rent", amount: 1000 },
// ];

// const result = expenses.reduce((prev, curr) => {
//   const { category, amount } = curr;
//   if (!prev[category]) {
//     prev[category] = 0;
//   }
//   prev[category] += amount;
//   return prev;
// }, {});

// console.log(result);

// const people = [
//   { name: "Lasha", age: 25 },
//   { name: "Ana", age: 30 },
//   { name: "Gio", age: 25 },
//   { name: "Nino", age: 30 },
// ];

// const resul = people.reduce((prev, curr) => {
//   const { name, age } = curr;
//   if (!prev[age]) {
//     prev[age] = [];
//   }
//   prev[age].push(name);
//   return prev;
// }, {});

// console.log(resul);

// const tools = [
//   // { good: 3, broken: 1 }
//   { name: "Hammer", status: "good" },
//   { name: "Saw", status: "broken" },
//   { name: "Drill", status: "good" },
//   { name: "Axe", status: "good" },
// ];

// const result = tools.reduce((prev, curr) => {
//   const { name, status } = curr;

//   if (!prev[status]) {
//     prev[status] = 0;
//   }

//   prev[status]++;

//   return prev;
// }, {});

// console.log(result);

// 'a***r***e'
// const s = [
//   "bitcoin",
//   "take",
//   "over",
//   "the",
//   "world",
//   "maybe",
//   "who",
//   "knows",
//   "perhaps",
// ];

// let firstWord = s.sort().at(0);

// let result = "";

// for (let i = 0; i < firstWord.length; i++) {
//   let isLastWord = i === firstWord.length - 1;
//   if (!isLastWord) {
//     result += firstWord[i] + "***";
//   } else {
//     result += firstWord[i];
//   }
// }

// console.log(result);

// console.log(s.sort()[0].split("").join("***"));

// const arr = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];

// const result = arr.map(([age, handicup]) =>
//   age >= 55 && handicup > 7 ? "Senior" : "open",
// );

// console.log(result);

// const signature = [1, 1, 1];
// const n = 6;

// function tribonacci(signature, n) {
//   if (n === 0) return [];

//   const arr = [...signature];

//   for (let i = 0; i < n; i++) {
//     let endThreeNumbers = arr.slice(-3);
//     const sum = endThreeNumbers.reduce((prev, curr) => prev + curr);

//     arr.push(sum);
//   }
//   return arr.slice(0, n);
// }

// const signature = [1, 1, 1];
// const n = 6;

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
//   }
//   return signature.slice(0, n);
// }

// console.log(tribonacci(signature, n));

// const n = 1234;

// console.log(countBits(n));

// function countBits(n) {
//   return n
//     .toString(2)
//     .split("")
//     .filter((x) => x === "1").length;
// }

// const a = 0;
// const b = -1;

// function getSum(a, b) {
//   let count = Math.abs(a - b) + 1;
//   let sum = (count * (a + b)) / 2;

//   return sum;
// }

// console.log(getSum(a, b));

// const pin = "1234";

// function validatePIN(pin) {
//   if (pin.length !== 4 && pin.length !== 6) {
//     return false;
//   }
//   const hasInvalidChars = /[^0-9]/.test(pin);

//   if (hasInvalidChars) {
//     return false;
//   }
//   return true;
// }

// console.log(validatePIN(pin));
