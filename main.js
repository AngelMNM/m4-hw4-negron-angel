//create pizza obect and properties
var pizza = {
    crust: "thin",
    cheese: "cheddar",
    sauce: "delicious tomato",

    addToppings: function() {
        console.log('Please add pepperoni and sausage');
    }
};


//create new function 'orderPizza'
function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    pizza.addToppings();
    /* 
    //trying to do this with a for loop ..but above is not an array.. i tried.
    for (i = 0; i < 4; i++) {
        console.log(pizza.addToppings);
    }
    */
}

//invoke function
orderPizza();