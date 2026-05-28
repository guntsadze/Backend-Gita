// 1)

// const url = "https://jsonplaceholde.typicode.com";

// async function fetchData(url, retryCount) {
//   if (retryCount === 0) {
//     console.log("ყველა მცდელობა ჩაიშალა!");
//     return;
//   }

//   const response = await fetch(url).catch(function () {
//     console.log("სერვერთან კავშირი ვერ დამყარდა...");
//   });

//   if (!response) {
//     return fetchData(url, retryCount - 1);
//   }

//   const data = await response.json();
//   return data;
// }

// fetchData(url, 5);

// ----------------------------------------------------------------------

// 2)

// const urls = [
//   "https://dummyjson.com/users",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// async function fetchFirstFaster(urls) {
//   const responses = await Promise.race(urls.map((url) => fetch(url)));

//   return await responses.json();
// }

// const data = await fetchFirstFaster(urls);
// console.log(data);

// ----------------------------------------------------------------------

// 3)

// const url = "https://dummyjson.com/products";

// async function fetchProducts(url, minPrice) {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data.products.filter((item) => item.price >= minPrice);
// }

// const data = await fetchProducts(url, 10);
// console.log(data);

// ----------------------------------------------------------------------

// 4)

// const url = "https://dummyjson.com/users";

// async function fetchDevelopers(url, position) {
//   const result = await fetch(url);
//   const data = await result.json();

//   const filteredUsers = data.users.filter(
//     (user) => user.company.title.toLowerCase() === position.toLowerCase(),
//   );

//   const userInfo = filteredUsers.map((user) => {
//     return {
//       სახელი: user.firstName,
//       გვარი: user.lastName,
//       მისამართი: user.address,
//       იმეილი: user.email,
//       ტელეფონი: user.phone,
//     };
//   });

//   return userInfo;
// }

// const data = await fetchDevelopers(url, "web developer");

// console.log(data);

// ----------------------------------------------------------------------

// 5)

const urls = [
  "https://dummyjson.com/recipes",
  "https://dummyjson.com/comments",
  "https://dummyjson.com/todos",
  "https://dummyjson.com/quotes",
];

async function fetchAllData(urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)));

  return Promise.all(responses.map((response) => response.json()));
}

const data = await fetchAllData(urls);
console.log(data);
