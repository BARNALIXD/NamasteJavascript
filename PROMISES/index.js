const cart = ["shoes","skirt","tops"];


const promise = creatOrder(cart);//order id

promise.then(function(){
    proceedToPayment(orderId);
})

///producer part

function createOrder(cart) {
    //resolve and reject orders are given by the javascript function in order to create promises
    const pr = new Promise(function(resolve, reject){

    });
    return pr;
}
