//MAIN-------------------------------------
function Employee(name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
    this.bonus = 1000;
}
Employee.prototype.countBonuses = function () {
    console.log(this.bonus);
}
Employee.prototype.sayName = function () {
    console.log(`Name: $ {this.name}`);
}
//CLASS------------------------------------
//Developer----------------------
function Developer(neme, age, exp, lang) {
    this.leng = lang;
    Employee.call(this, neme, age, exp)
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.countBonuses = function () {
    return this.bonus * 2;
}
Developer.prototype.constructor = Developer;

//Accountant---------------------
function Accountant(name, age, exp, salary) {
    this.salary = salary;
    Employee.call(this, name, age, exp);
}
Object.assign(Accountant.prototype, Employee.prototype);
Accountant.prototype.countBonuses = function () {
    return this.bonus * 3;
};
Accountant.prototype.constructor = Accountant;

//InstansOf
let dev1 = new Developer("Jhon", 26, 3, "JS");
dev1.countBonuses();
console.log(dev1);

let ac1 = new Accountant('Anahit', 21, 5, 200000);
ac1.countBonuses();

var empArr = [];
for (var i = 0; i < 20; i++) {
    var rand = Math.round(Math.random());
    if (rand) {
        empArr.push(new Developer(`Jhon ${i}`, 26 + i, 3, "JS"))
    } else {
        empArr.push(new Accountant(`Anahit ${i}`, 21, 5, 200000 + i * 10))
    }
}
for (var emp of empArr) {
    console.log(emp.name + ' ' + emp.countBonuses());
}

//
//BoardGame.prototype = {
//    constructor : BoardGame,
//    move: function () {
//        console.log("Move the Items");
//    }
//}