const isEven = (num) => num % 2 === 0; 
const isOdd = (num) => num % 2 !== 0; 

const filter = (arr, callback) => { 
    const filteredArray = []; 
    
    for (const element of arr) { 
        if (callback(element)) { 
            filteredArray.push(element); 
        } 
    } 
    
    return filteredArray; 
} 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; 
console.log(filter(numbers, isEven)); // [2, 4, 6, 8] 
console.log(filter(numbers, isOdd)); // [1, 3, 5, 7]