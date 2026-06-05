// 1)

class Todo {
  #todos = [];
  #id = 0;
  AddTodo(title) {
    if (!title) return;
    this.#id++;

    const newTodo = {
      id: this.#id,
      title: title,
      isDone: false,
      createdAt: new Date().toISOString(),
    };
    this.#todos.push(newTodo);
  }

  deleteTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }

  checkActiveTodo(id) {
    const findTodo = this.#todos.find((todo) => todo.id === id);
    if (findTodo.isDone === true) return;
    findTodo.isDone = true;
  }

  getTodos(filter) {
    if (filter === "done") {
      const done = this.#todos.filter((todo) => todo.isDone);
      console.log("🚀 ~ Todo ~ getTodos ~ done:", done);
      return done;
    }
    if (filter === "active") {
      const active = this.#todos.filter((todo) => !todo.isDone);
      console.log("🚀 ~ Todo ~ getTodos ~ active:", active);
      return active;
    }

    const all = [...this.#todos];
    console.log("🚀 ~ Todo ~ getTodos ~ all:", all);
    return all;
  }
}

const myTodo = new Todo();

// myTodo.AddTodo("test1");
// myTodo.AddTodo("test2");
// myTodo.AddTodo("test3");
// myTodo.AddTodo("test4");
// myTodo.AddTodo("test5");
// myTodo.AddTodo("test6");
// myTodo.checkActiveTodo(1);
// myTodo.deleteTodo(5);
// myTodo.getTodos();
// myTodo.getTodos("done");

// -----------------------------------------------------------------

// 2)

class ShoppingCart {
  #cart = [];
  #sum = 0;
  #id = 0;

  addCart(item, count, price) {
    this.#id++;

    const newItem = {
      id: this.#id,
      item: item,
      price: price,
      count: count,
    };

    this.#cart.push(newItem);
    console.log(this.#cart);
  }

  deleteCart(id) {
    this.#cart = this.#cart.filter((item) => item.id !== id);
  }

  totalSum() {
    const sum = this.#cart.reduce(
      (prev, cur) => prev + cur.price * cur.count,
      0,
    );
    console.log("🚀 ~ ShoppingCart ~ totalSum ~ sum:", sum);
    return sum;
  }

  updateCartItem(id, newData) {
    const findItem = this.#cart.find((item) => item.id === id);

    this.#cart = this.#cart.map((item) => {
      if (item.id === id) {
        return { ...item, ...newData };
      }
      return item;
    });
  }
}

const myShoppingCart = new ShoppingCart();

// myShoppingCart.addCart("test1", 1, 10);
// myShoppingCart.addCart("test2", 2, 20);
// myShoppingCart.addCart("test3", 3, 30);
// myShoppingCart.totalSum();
// myShoppingCart.updateCartItem(2, { count: 5 });

// -----------------------------------------------------------------

// 3)

class Library {
  #books = [];
  #id = 0;
  addBook(book) {
    this.#id++;

    const newBook = {
      id: this.#id,
      title: book.title,
      year: book.year,
    };
    this.#books.push(newBook);
  }
  removeBook(id) {
    this.#books = this.#books.filter((book) => book.id !== id);
  }
  listBooks(filter) {
    if (filter === "asc") {
      const ascSorted = this.#books.sort((a, b) => a.year - b.year);
      console.log("🚀 ~ Library ~ listBooks ~ ascSorted:", ascSorted);
      return ascSorted;
    }

    if (filter === "desc") {
      const descSorted = this.#books.sort((a, b) => b.year - a.year);
      console.log("🚀 ~ Library ~ listBooks ~ descSorted:", descSorted);
    }
  }
}

const myLibrary = new Library();

// myLibrary.addBook({ title: "test1", year: 2000 });
// myLibrary.addBook({ title: "test2", year: 2001 });
// myLibrary.addBook({ title: "test3", year: 2002 });
// myLibrary.removeBook(2);
// myLibrary.listBooks("asc");
// myLibrary.listBooks("desc");

// -----------------------------------------------------------------

// 4)

class ContactManager {
  #contacts = [];
  #id = 0;

  addNewContact(contact) {
    const emailExists = this.#contacts.find((c) => c.email === contact.email);
    if (emailExists) {
      console.log("იმეილი უკვე არსებობს");
      return false;
    }

    const phoneExists = this.#contacts.find((c) => c.phone === contact.phone);
    if (phoneExists) {
      console.log("ტელეფონის ნომერი უკვე არსებობს");
      return false;
    }

    this.#id++;
    const newContact = {
      id: this.#id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    };

    this.#contacts.push(newContact);
  }

  viewAllContacts() {
    const all = [...this.#contacts];
    console.log("🚀 ~ ContactManager ~ viewAllContacts ~ all:", all);
    return all;
  }

  updatePhone(id, newPhone) {
    const phoneExists = this.#contacts.find(
      (c) => c.phone === newPhone && c.id !== id,
    );
    if (phoneExists) {
      console.log("ეს ტელეფონის ნომერი უკვე არსებობს");
      return false;
    }

    const contact = this.#contacts.find((c) => c.id === id);
    if (contact) {
      contact.phone = newPhone;
    }

    return false;
  }

  deleteContact(id) {
    const initialLength = this.#contacts.length;
    this.#contacts = this.#contacts.filter((c) => c.id !== id);

    return false;
  }
}

const myContactManager = new ContactManager();

myContactManager.addNewContact({
  name: "გიორგი",
  email: "gio@gmail.com",
  phone: "555111222",
});

myContactManager.addNewContact({
  name: "ნიკა",
  email: "nika@gmail.com",
  phone: "555333444",
});

myContactManager.addNewContact({
  name: "ანა",
  email: "gio@gmail.com",
  phone: "555999999",
});

myContactManager.addNewContact({
  name: "ლუკა",
  email: "luka@gmail.com",
  phone: "555333444",
});

myContactManager.updatePhone(1, "555000000");

// myContactManager.deleteContact(2);

myContactManager.viewAllContacts();
