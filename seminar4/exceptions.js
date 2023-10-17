//  SYNTAX ERROR
// const func = () => 
//     console.log('test')
// }

// REFFERENCE ERROR
// console.log(x)

// console.log('test')

// RANGE ERROR
// const checkRange = (num)=>{ 
//     if (num < 30) throw new RangeError("Wrong number"); 
    
// return true;}

// checkRange(20)

// URI ERROR
// console.log(decodeURI("%sdfk"));

function testFunction(a,b) {
    try {
        if (a < b) {
            throw new Error('A trebuie sa fie mai mare ca B');
        }

        return a + b;
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('Am terminat de executat')
    }
}

// try {
//     const result = testFunction(1,2);
//     // const result2 = testFunction(2,1);
// } catch (error) {
//     console.log(error.message)
// }

const result = testFunction(2,1);