// CLASS DECLARATION
// class Student { 
//     constructor(name) { 
//         this.name = name; 
//         this.greet = function() { 
//             console.log(`Hello, my name is ${this.name}.`); 
//         }
//     }
// }

// CLASS EXPRESSION
const Student = class { 
    constructor(name) { 
        this.name = name; 
        this.greet = function() { 
            console.log(`Hello, my name is ${this.name}.`); 
        }
    }
}

const newStudent = new Student('Adrian');
console.log(newStudent);