const arr = [1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let el of arr) {
//     console.log(el)
// }

// for (let el in arr) {
//     console.log(el)
// }

const arrResult1 = arr.forEach((el, index) => {
    // console.log(el)
    // console.log(index)
})

const arrResult2 = arr.map((el, index) => {
    // console.log(el)
    // console.log(index)
    return el * 2;
})

console.log(arrResult1);
console.log(arrResult2);