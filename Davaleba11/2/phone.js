const fs = require("fs").promises;
const path = require("path");

const CONTACTS_FILE = path.join(__dirname, "contacts.json");

async function readContacts() {
  try {
    const data = await fs.readFile(CONTACTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveContacts(contacts) {
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts), "utf-8");
}

async function addContact(phone, name) {
  if (!phone || !name) {
    return;
  }

  const contacts = await readContacts();

  const phoneExists = contacts.some((c) => c.phone === phone);
  if (phoneExists) {
    console.log(`ნომერი უკვე არსებობს ბაზაში!`);
    return;
  }

  contacts.push({ phone, name });
  await saveContacts(contacts);
}

async function deleteContact(phone) {
  if (!phone) {
    console.log("გთხოვთ მიუთითოთ წასაშლელი ნომერი.");
    return;
  }

  const contacts = await readContacts();

  const initialLength = contacts.length;
  const filteredContacts = contacts.filter((c) => c.phone !== phone);

  if (filteredContacts.length === initialLength) {
    console.log(`ნომერი ბაზაში ვერ მოიძებნა`);
    return;
  }

  await saveContacts(filteredContacts);
}

async function showContacts() {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log("კონტაქტების სია ცარიელია.");
    return;
  }

  contacts.forEach((contact) => {
    console.log(contact);
  });
}

const [, , action, arg1, arg2] = process.argv;

async function main() {
  switch (action) {
    case "add":
      await addContact(arg1, arg2);
      break;
    case "delete":
      await deleteContact(arg1);
      break;
    case "show":
      await showContacts();
      break;
    default:
  }
}

main();
