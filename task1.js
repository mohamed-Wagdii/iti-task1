var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function showWeather(num, condtion) {
    return "the weather is : ".concat(condtion, " and the degree ").concat(num);
}
console.log(showWeather(20, "Cold"));
var students = [
    ["Ali", 85, true],
    ["Sara", 45, false],
    ["John", 72, true],
];
function printPassed(students) {
    students.forEach(function (_a) {
        var name = _a[0], grade = _a[1], passed = _a[2];
        if (passed) {
            console.log("".concat(name, " passed with grade ").concat(grade));
        }
    });
}
printPassed(students);
////Task 3 /// 
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this._accountHolder = accountHolder;
        this._balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this._balance += amount;
        console.log("".concat(amount, " deposited. New balance: ").concat(this._balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        this._balance -= amount;
        console.log("".concat(amount, " withdrawn. New balance: ").concat(this._balance));
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount("Mohamed", 1000);
account.deposit(500);
account.withdraw(300);
console.log("Final Balance:", account.balance);
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.login = function () {
        console.log("".concat(this.name, " (Employee) logged in."));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name) {
        return _super.call(this, id, name) || this;
    }
    Manager.prototype.login = function () {
        console.log("".concat(this.name, " (Manager) logged in with admin privileges."));
    };
    Manager.prototype.manage = function () {
        console.log("".concat(this.name, " is managing the team."));
    };
    return Manager;
}(Employee));
var user1 = new Employee(1, "Ali");
var user2 = new Manager(2, "Sara");
user1.login();
user2.login();
var manager = new Manager(3, "John");
manager.manage();
/// task5 /// 
// enum AlertLevel {
//   LOW = "LOW",
//   MEDIUM = "MEDIUM",
//   HIGH = "HIGH",
//   CRITICAL = "CRITICAL"
// }
// abstract class Alert {
//   description?: string;
//   constructor(description?: string) {
//     this.description = description;
//   }
//   abstract trigger(): void;
// }
// class FireAlert extends Alert {
//   private level: AlertLevel;
//   constructor(level: AlertLevel);
//   constructor(level: AlertLevel, description: string);
//   constructor(level: AlertLevel, description?: string) {
//     super(description);
//     this.level = level;
//   }
//   trigger(): void {
//     let message = `🔥 Fire Alert! Level: ${this.level}`;
//     if (this.description) {
//       message += ` | Description: ${this.description}`;
//     }
//     console.log(message);
//   }
// }
// let alert1 = new FireAlert(AlertLevel.LOW);
// let alert2 = new FireAlert(AlertLevel.CRITICAL, "Evacuate immediately!");
// alert1.trigger();
// alert2.trigger();


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaششssبssaaa