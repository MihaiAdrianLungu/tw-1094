const arr = [1,2,3];
const isEven = (num) => num % 2 === 0;

const newArr = arr.filter((el) => isEven(el));