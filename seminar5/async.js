// async function f() {
//     return 1;
// }

function f() {
    return Promise.resolve(1);
}

console.log(f())