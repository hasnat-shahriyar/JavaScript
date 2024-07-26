// Function Method
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

let getWage = (baseSalary, overTime, rate) => {
    return baseSalary + (overTime * rate);
}
const funcMethodResult = getWage(baseSalary, overTime, rate);
console.log(`Function Method Result : ${funcMethodResult}`);

// Object Oriented : Encapsulation Method
let employee = {
    baseSalary: 25000,
    overTime: 5,
    rate: 30,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate)
    }
};

const Encapsulation_result = employee.getWage();
console.log(`Encapsulation Method ${Encapsulation_result}`);

// "The best functions are those with no parameters - Robert C Martin"
// The fewer the number of parameters that easier it is to maintain that function.