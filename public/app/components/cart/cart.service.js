"use strict";

function CartService ($http) {
    const self = this;


    self.getItem = () => {
        return $http({
          url:"/cart-items", 
          method: "GET"
        });
      };
    
      self.addItem = (newItem) => {
        return $http({
          url:"/cart-items",
          method: "POST",
          data: newItem
        });
      };
    
      self.deleteItem = (id) => {
        return $http({
          url: `/cart-items/${id}`,
          method: "DELETE"
        });
      };
    
      self.updateItem = (editedItem) => {
        return $http({
          url: `/cart-items/${editedItem.id}`,
          method: "PUT",
          data: editedItem
        });
      };


}

angular
    .module("App")
    .service("CartService", CartService);