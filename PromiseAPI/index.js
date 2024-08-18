const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from p1");
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {resolve("Result from p2");}, 3000);
    setTimeout(() => {reject("result from p2")}, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from p3");
    }, 2000);
})


Promise.allSettled([p1,p2,p3]).then((result) => {
    console.log(result);
});