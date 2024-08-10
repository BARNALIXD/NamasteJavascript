const GITHUB_API = "https://github.com/users.barnalixd"

//fetch the user info by this function 
const user = fetch(GITHUB_API);
//as soon as the line of code is executed will get the promise as the user fetch returns us a promise
console.log(user);

//attaching call backs to promises
user.then(function(data){
    console.log(data);
})