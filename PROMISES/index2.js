const cart = ["pants","shorts","tops"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWallletBalance();
        });
    });
});

//PROMISE CHAINING
createOrder (cart)
.then(function(orderId){
  return  proceedToPayment(orderId);
})
.then(function(paymentInfo){
 return   showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
  return  updateWallletBalance(paymentInfo);
})
// always remember to return .then() 


//PROMISE CHAINING USING ARROW FUNCTION
createOrder (cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWallletBalance(paymentInfo))
 