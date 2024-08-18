async function getData() {
    return "namaste";
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));