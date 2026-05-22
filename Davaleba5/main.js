// 1)

// const object = {
//   name: "dimitri",
//   lastname: "guntsadze",
// };

// function removeProperty(obj, prop) {
//   delete obj[prop];

//   return obj;
// }

// console.log(removeProperty(object, "name"));

// -----------------------------------------------------------------------

// 2)

// const students = [
//   { name: "Ana", score: 50 },
//   { name: "Nika", score: 80 },
//   { name: "Luka", score: 70 },
// ];

// function foo(arr) {
//   const result = arr
//     .sort((a, b) => b.score - a.score)
//     .map((r, i) => ({ ...r, rank: i + 1 }));

//   return result;
// }

// console.log(foo(students));

// -----------------------------------------------------------------------

// 3)

// const books = [
//   { title: "Up", year: 2009 },
//   { title: "The Lord of the Rings", year: 2001 },
// ];

// function getLongestTitle(arr) {
//   return arr.reduce((prev, curr) => {
//     if (curr.title.length > prev.title.length) {
//       return curr;
//     }

//     return prev;
//   });
// }

// console.log(getLongestTitle(books));

// -----------------------------------------------------------------------

// 4)

// const team = [
//   { name: "Ana", dept: "HR", age: 25 },
//   { name: "Nika", dept: "IT", age: 30 },
//   { name: "Luka", dept: "IT", age: 22 },
// ];

// function getAverageAgeByDept(arr) {
//   const deptData = arr.reduce((acc, curr) => {
//     if (!acc[curr.dept]) {
//       acc[curr.dept] = { totalAge: 0, count: 0 };
//     }

//     acc[curr.dept].totalAge += curr.age;
//     acc[curr.dept].count += 1;

//     return acc;
//   }, {});

//   const finalResult = {};

//   for (const dept in deptData) {
//     finalResult[dept] = deptData[dept].totalAge / deptData[dept].count;
//   }

//   return finalResult;
// }

// console.log(getAverageAgeByDept(team));

// -----------------------------------------------------------------------

// 5)

// const arr = [
//   { id: 1, comment: "Hello world" },
//   { id: 2, comment: "This is great!" },
//   { id: 3, comment: "" },
// ];

// const result = arr.reduce((total, item) => {
//   const cleanComment = item.comment.trim();

//   if (cleanComment === "") {
//     return total + 0;
//   }

//   if (item.comment === "") total + 0;

//   let wordsCount = item.comment.split(" ").length;

//   console.log("🚀 ~ wordsCount:", wordsCount);
//   return total + wordsCount;
// }, 0);

// console.log(result);

// -----------------------------------------------------------------------

// 6)

// const users = [
//   { name: "Ana", department: "HR", salary: 2000 },
//   { name: "Nika", department: "IT", salary: 5000 },
//   { name: "Luka", department: "IT", salary: 3500 },
//   { name: "Mariam", department: "HR", salary: 3000 },
// ];

// function groupAndSortEmployees(arr) {
//   const grouped = arr.reduce((acc, curr) => {
//     if (!acc[curr.department]) {
//       acc[curr.department] = [];
//     }

//     acc[curr.department].push(curr);

//     return acc;
//   }, {});

//   for (const dept in grouped) {
//     console.log("🚀 ~ groupAndSortEmployees ~ dept:", dept);
//     console.log("🚀 ~ groupAndSortEmployees ~ grouped:", grouped);
//     grouped[dept].sort((a, b) => b.salary - a.salary);
//   }

//   return grouped;
// }

// console.log(groupAndSortEmployees(users));

// -----------------------------------------------------------------------

// 7)

// const arr = [
//   { title: "Laptop", price: 2000, quantity: 1, discountPercent: 10 },
//   { title: "Mouse", price: 50, quantity: 2, discountPercent: 0 },
//   { title: "Keyboard", price: 100, quantity: 1, discountPercent: 20 },
// ];

// const result = arr.reduce((tot, cur) => {
//   const { price, quantity, discountPercent } = cur;
//   let total = price * quantity;

//   if (discountPercent !== 0) {
//     total = total - total * (discountPercent / 100);
//   }

//   tot = tot + total;

//   return tot;
// }, 0);

// console.log(result);

// -----------------------------------------------------------------------

// 8)

const users = [
  { id: 1, name: "Ana", age: 25 },
  { id: 2, name: "Nika", age: 30 },
  { id: 3, name: "Luka", age: 22 },
];

function arrayToObject(users) {
  return users.reduce((prev, curr) => {
    prev[curr.id] = curr;

    return prev;
  }, {});
}

console.log(arrayToObject(users));
