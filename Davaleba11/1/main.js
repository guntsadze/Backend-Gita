const fs = require("fs").promises;

const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchAndSaveUsers() {
  const response = await fetch(URL);

  const users = await response.json();

  const filteredUsers = users.map(({ id, name, username, email }) => ({
    id,
    name,
    username,
    email,
  }));

  await fs.writeFile("users.json", JSON.stringify(filteredUsers), "utf-8");
}

fetchAndSaveUsers();
