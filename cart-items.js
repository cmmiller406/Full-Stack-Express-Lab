"use strict";

const express = require("express");
const cartRoutes = express.Router();

const cartItems = [
    {
        id: 0,
        product: "Apples",
        price: 5.00,
        quantity: 1
    },
    {
        id: 1,
        product: "Milk",
        price: 2.50,
        quantity: 1
    },
    {
        id: 2,
        product: "Bread",
        price: 3.50,
        quantity: 2
    }
];

cartRoutes.get("/cart-items", (req, res) => {
    res.json(cartItems);
})


module.exports = cartRoutes;

