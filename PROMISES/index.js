const cart = ["shoes","skirt","tops"];


const promise = creatOrder(cart);//order id

promise.then(function(){
    proceedToPayment(orderId);
})

///producer end

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){

        
    //reject
    if(validateCart(cart)){
        const err = new Error("Cart is not valid");
           reject(err);
    }

    //resolve
    const orderId = "12345";
    if(orderId){
        resolve(orderId);
    }
});



    return pr;
}
