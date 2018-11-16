"use strict";

const cart = {
    template: `
    <section  class="list-container">
        <h2>Shopping Cart</h2>
        <ol>
            <li ng-repeat="item in $ctrl.cartItems"> 
            <p><span class="bold">Item:</span> {{ item.product }} </p>
            <p><span class="bold">Price: </span>{{ item.price | currency }} </p>
            <p><span class="bold"> Quantity: </span>{{ item.quantity }} </p>
            </li>
        </ol>
    </section>
    `,
    controller: ["CartService", function (CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.cartItems = response.data;
            console.log(vm.cartItems);
        })

    }]
}

angular
    .module("App")
    .component("cart", cart);