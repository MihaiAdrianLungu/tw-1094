function processString(input){
    if(input.length === 0) {
        return 100;
    }

    const numbers = input.split(' ');
    let testResult = true;

    for (number of numbers) {
        if(isNaN(number)) {
            testResult = false;
        }
    }

    if (!testResult) {
        throw new Error('Item is not a number');
    }

    const evenNumbers = numbers.filter(el => el % 2 === 0);

    if (evenNumbers.length === 0) {
        return 100;
    }

    const diff = evenNumbers.reduce((acc, el) => acc - el, 100);

    return diff;
}

const app = {
    processString: processString
}

module.exports = app