// type Rectangle = {
//   width: number;
//   height: number;
// };

// type Radius = {
//   radius: number;
// };

// type Circle = Radius;

// function calculateRectangleArea(rectangle: Rectangle): number {
//   return rectangle.width * rectangle.height;
// }

// function calculateRectanglePerimeter(rectangle: Rectangle): number {
//   return 2 * (rectangle.width + rectangle.height);
// }

// function calculateCircleArea(circle: Circle) {
//   return Math.PI * Math.pow(circle.radius, 2);
// }

// function calculateCirclePerimeter(circle: Circle) {
//   return 2 * Math.PI * circle.radius;
// }

//--------------------------------------------------------------------

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

//--------------------------------------------------------------------

// Independent Functions

function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Test Cases

// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.

const rectangle = new Rectangle(5, 8);
const circle = new Circle(3);

// const rectangle = { width: 5, height: 8 };
// const circle = { radius: 3 };

const rectangleArea = rectangle.calculateArea();
const rectanglePerimeter = rectangle.calculatePerimeter();

const circleArea = circle.calculateArea();
const circlePerimeter = circle.calculatePerimeter();

console.log(
  `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`,
);
console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);

const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);

const maxNumber = findMax([23, 56, 12, 89, 43]);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);

console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);

//2)
//-------------------------------------------------------------

class BankAccount {
  private readonly _accountNumber: string;
  private _balance: number;
  private _transactionHistory: object[];

  constructor(accountNumber: string, balance: number) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._transactionHistory = [];
  }

  public getAccountInfo(): string {
    return `Account: ${this._accountNumber}, Balance: $${this._balance}`;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      return;
    }
    this._balance += amount;
    this._transactionHistory.push({
      type: "Deposit",
      amount: amount,
    });
  }

  public withdraw(amount: number): number | boolean {
    if (amount <= 0) {
      return false;
    }
    if (amount > this._balance) {
      return false;
    }
    this._balance -= amount;
    this.recordTransaction({
      type: "Withdrawal",
      amount: amount,
    });
    return this._balance;
  }

  public transferFunds(recipient: BankAccount, amount: number): boolean {
    if (amount <= 0 || amount > this._balance) return false;

    this._balance -= amount;
    this.recordTransaction({
      type: `Transfer to ${recipient._accountNumber}`,
      amount: amount,
    });

    recipient.deposit(amount);

    recipient.recordTransaction({
      type: `Transfer from ${this._accountNumber}`,
      amount: amount,
    });

    return true;
  }

  private recordTransaction(object: { type: string; amount: number }): void {
    this._transactionHistory.push({
      type: object.type,
      amount: object.amount,
    });
  }

  public getTransactionHistory(): object[] {
    return this._transactionHistory;
  }
}

const accountA = new BankAccount("GE11TB1111", 1000);
const accountB = new BankAccount("GE22BG2222", 500);

console.log(accountA.getAccountInfo());
console.log(accountB.getAccountInfo());

console.log(accountA.deposit(200));
console.log(accountB.deposit(300));

accountA.transferFunds(accountB, 300);

console.log(accountA.getAccountInfo());
console.log(accountB.getAccountInfo());

console.log(accountA.getTransactionHistory());

console.log(accountB.getTransactionHistory());
