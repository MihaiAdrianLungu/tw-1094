const person = { name: 'John Doe', } 

let greeting = function(a, b) { 
    return `${a} ${this.name}. ${b}` 
}
    
let bound = greeting.bind(person);

console.log(bound)
console.log(bound('Hello', 'How are you?')); // Hello John Doe. How are you?