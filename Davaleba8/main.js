// 1)

// function debounce(callback, ms) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback(...args);
//     }, ms);
//   };
// }

// window.addEventListener(
//   "mousemove",
//   debounce((e) => {
//     console.log(e.clientX, e.clientY);
//   }, 300),
// );

// -----------------------------------------------------------------

// 2)

// const quotesBtn = document.querySelector(".quotesBtn");
// const quotesContainer = document.querySelector(".quotes");

// const url = "https://dummyjson.com/quotes";

// quotesBtn.addEventListener("click", async () => {
//   const response = await fetch(url);
//   const data = await response.json();

//   quotesContainer.textContent = "";

//   data.quotes.forEach((quotes) => {
//     const quotesDiv = document.createElement("div");

//     const quotesText = document.createElement("p");
//     quotesText.textContent = quotes.quote;

//     const quotesAuthor = document.createElement("p");
//     quotesAuthor.textContent = quotes.author;

//     quotesDiv.appendChild(quotesText);
//     quotesDiv.appendChild(quotesAuthor);

//     quotesContainer.appendChild(quotesDiv);
//   });
// });

// -----------------------------------------------------------------

// 3)

// const usersBtn = document.querySelector(".usersBtn");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// const limit = 30;
// let skip = 0;

// async function loadUsers() {
//   const response = await fetch(
//     `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
//   );
//   const data = await response.json();

//   return data;
// }

// async function renderUsers() {
//   const data = await loadUsers();

//   const existingDivs = document.querySelectorAll("body > div");
//   existingDivs.forEach((div) => div.remove());

//   data.users.forEach((user) => {
//     const userDiv = document.createElement("div");
//     const userName = document.createElement("p");
//     userName.textContent = user.firstName;

//     userDiv.appendChild(userName);
//     document.body.appendChild(userDiv);
//   });
// }

// usersBtn.addEventListener("click", async () => {
//   skip = 0;
//   await renderUsers();
// });

// nextBtn.addEventListener("click", async () => {
//   skip += limit;
//   await renderUsers();
// });

// prevBtn.addEventListener("click", async () => {
//   if (skip > 0) {
//     skip -= limit;
//     await renderUsers();
//   }
// });

// -----------------------------------------------------------------

// 4)

const carIdInput = document.querySelector(".carIdInput");
const searchBtn = document.querySelector(".searchBtn");
const carContainer = document.querySelector(".carContainer");

searchBtn.addEventListener("click", async () => {
  const carId = carIdInput.value.trim();

  if (!carId) {
    alert("გთხოვთ, შეიყვანოთ ID!");
    return;
  }

  carContainer.textContent = "";

  const response = await fetch(`https://myfakeapi.com/api/cars/${carId}`);

  const data = await response.json();
  console.log("🚀 ~ data:", data.Car);

  if (!data.Car) {
    alert("მანქანა ამ ID-ით ვერ მოიძებნა! გთხოვთ, შეიყვანოთ სწორი ID.");
    return;
  }

  const car = data.Car;

  const carInfo = document.createElement("div");
  carInfo.innerHTML = `
      <h3>მანქანა: ${car.car}</h3>
      <p>მოდელი: ${car.car_model}</p>
      <p>წელი: ${car.car_model_year}</p>
      <p>ფერი: ${car.car_color}</p>
      <p>ფასი: ${car.price}</p>
    `;

  carContainer.appendChild(carInfo);
});
