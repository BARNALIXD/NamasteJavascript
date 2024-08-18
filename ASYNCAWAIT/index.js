
const pr = new Promise((resolve, reject) => {
resolve("success");
});


async function getData() {
    return pr;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));