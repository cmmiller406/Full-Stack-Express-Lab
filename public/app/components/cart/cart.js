"use strict";

const cart = {
    templateUrl: "app/components/cart/cart.html",
    controller: ["CartService", function (CartService) {
        const vm = this;

        function updateList(result) {
            vm.listOfItems = result.data;
        };

        CartService.getItem().then(updateList);

        vm.addItem = (newItem) => {
            CartService.addItem(newItem).then(updateList);
        };

        vm.deleteItem = (id) => {
            CartService.deleteItem(id).then(updateList);
        };

        vm.updateItem = (editedItem) => {
            CartService.updateItem(editedItem).then(updateList);
        };

    }]

};

angular
    .module("App")
    .component("cart", cart);