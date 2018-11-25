"use strict";

const express = require("express");
const cartRoutes = express.Router();
const pool = require("./pg-connection-pool.js");

cartRoutes.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM ShoppingCart ORDER BY id").then((result) => { 
        res.json(result.rows);
    });
});

cartRoutes.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE ShoppingCart SET product=$1::text, price=$2::decimal, quantity=$3::int WHERE id=$4::int",[req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
        pool.query("SELECT * FROM ShoppingCart").then((result) => {
            res.json(result.rows);
        });
    });
});

cartRoutes.delete("/cart-items/:id", (req, res) => {
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int", [req.params.id]).then(() => {
        pool.query("SELECT * FROM ShoppingCart").then((result) => {
            res.json(result.rows);
        });
    });
});

cartRoutes.post("/cart-items", (req, res) => {
    pool.query("INSERT INTO ShoppingCart(product, price, quantity) VALUES($1::text, $2::decimal, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM ShoppingCart").then((result) => {
            res.json(result.rows);
        });
    });
});


module.exports = cartRoutes;

