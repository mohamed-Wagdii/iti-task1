type WeatherCondition = "Sunny" | "Cloudy" | "Rainy" | "Stormy";

function analyzeWeather(temp: number | null, condition: WeatherCondition): string {
  if (temp === null) {
    return "Temperature not available.";
  }
  return `Today is ${condition} with ${temp}°C`;
}

console.log(analyzeWeather(28, "Rainy"));   
console.log(analyzeWeather(null, "Sunny")); 

//// task2

type StudentTuple = [string, number, boolean]; 
let students: StudentTuple[] = [
  ["Ali", 85, true],
  ["Sara", 45, false],
  ["John", 72, true],
  ["Mary", 33, false],
  ["Omar", 91, true],
]

function printPassed(students: StudentTuple[]): void {
  students.forEach(([name, grade, passed]) => {
    if (passed) {
      console.log(`${name} passed with grade ${grade}`);
    }
  });
}


printPassed(students);


////Task 3 /// 

class BankAccount {
  private _balance: number;
  private _accountHolder: string;

  constructor(accountHolder: string, initialBalance: number = 0) {
    this._accountHolder = accountHolder;
    this._balance = initialBalance;
  }

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this._balance}`);
  }

  public withdraw(amount: number): void {
    if (amount > this._balance) {
      throw new Error("Cannot withdraw more than balance");
    }
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    this._balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
  }
}

const myAccount = new BankAccount("Mohamed", 100);

console.log(myAccount.balance);
myAccount.deposit(50);
myAccount.withdraw(70);
myAccount.withdraw(200);


/// task4 ///

interface User {
  id: number;
  name: string;
  login(): void;
}

class Employee implements User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  login(): void {
    console.log(`${this.name} (Employee) logged in.`);
  }
}

class Manager extends Employee {
  constructor(id: number, name: string) {
    super(id, name);
  }

  login(): void {
    console.log(`${this.name} (Manager) logged in with admin privileges.`);
  }

  manage(): void {
    console.log(`${this.name} is managing the team.`);
  }
}

let user1: User = new Employee(1, "Ali");
let user2: User = new Manager(2, "Sara");

user1.login(); 
user2.login();

let manager = new Manager(3, "John");
manager.manage();


/// task5 /// 

enum AlertLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL"
}

abstract class Alert {
  description?: string;

  constructor(description?: string) {
    this.description = description;
  }

  abstract trigger(): void;
}

class FireAlert extends Alert {
  private level: AlertLevel;

  constructor(level: AlertLevel);
  constructor(level: AlertLevel, description: string);
  constructor(level: AlertLevel, description?: string) {
    super(description);
    this.level = level;
  }

  trigger(): void {
    let message = `🔥 Fire Alert! Level: ${this.level}`;
    if (this.description) {
      message += ` | Description: ${this.description}`;
    }
    console.log(message);
  }
}

let alert1 = new FireAlert(AlertLevel.LOW);
let alert2 = new FireAlert(AlertLevel.CRITICAL, "Evacuate immediately!");

alert1.trigger();
alert2.trigger();
