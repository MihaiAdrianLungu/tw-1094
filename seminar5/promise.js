const promise = new Promise((resolve, reject) => {
    // resolve('text');
    reject('error')
});

promise
    .then((message) => console.log(message))
    .catch((message) => console.log(message));