class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name; 
    }
    setAge(){
        return this.age;
    }
}

let MathTeacher = new Teacher('Shad', 23);
console.log(MathTeacher);
console.log(`Math Teacher Name : ${MathTeacher.name} and his age is : ${MathTeacher.age}`);

console.log(MathTeacher.getName());
console.log(MathTeacher.setAge());