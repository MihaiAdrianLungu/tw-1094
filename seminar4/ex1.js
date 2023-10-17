function increaseSalary(arr, factor) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('Salaries array is not an array');
        }

        if (typeof factor !== 'number') {
            throw new Error('Factor is not a number');
        }

        const newArr = arr.map(el => el + (el * factor / 100));

        return newArr;
    } catch (error) {
        console.log(error.message)
    }
} 

const salaries = [1000, 2000, 3000];
const procent = 10;

const newSalaries = increaseSalary(salaries, procent);
console.log(newSalaries);