const res = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject('hello');
    }, 1000);
});

res.then(res => {
    console.log(res);
}).catch(res => {
    console.log(`error ${res}`);
}).finally(() => {
    console.log('finally');
});