
const pr = new Promise((resolve, reject) => {
resolve("success");
});

async function handlePromise () {
 const value =   await pr ;
}