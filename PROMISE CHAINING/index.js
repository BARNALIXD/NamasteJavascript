const cart = ["shoes", "pants", "tops"];

const promise = createOrder(cart);
console.log(promise);
 //orderId
promise.then(function (orderId) {
    console.log(orderId);
});


function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
     
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
       const orderId = "102569";
       if (orderId) {
        setTimeout(function(){
            resolve(orderId);
        },5000);
    }
});

    
    return pr;

}
function validateCart(cart) {
    return true;
}