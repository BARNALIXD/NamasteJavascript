const cart = ["shoes","pants","kurta"];

//create order
api.createOrder(cart, function () {
//proceed to payment
    api.proceedToPayment(function() {
        //ordersummary
        api.showOrderSummary(function() {
            //updatewallet
        api.updateWallet()
       })
    })
})


//The above structure is known as the Pyramid of doom




