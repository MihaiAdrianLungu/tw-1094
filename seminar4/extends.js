class Student { 
    constructor(name, age, grade) { 
        this.name = name; 
        this.age = age; 
        this.grade = grade; 
        this.greeting = function (){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); 
        } 
    } 

} 

class Teacher extends Student { 
    constructor(name, age, grade, subject) { 
        super(name, age, grade); 
        this.subject = subject; 
    } 
    teach() { 
        console.log(`I teach ${this.subject}.`); 
    } 
}

const student1 = new Student('Adrian', 24, 10);
const teacher1 = new Teacher('Lungu', 24, 10, 'Web Technologies');

console.log(student1);
console.log(teacher1);