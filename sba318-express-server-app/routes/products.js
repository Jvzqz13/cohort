const express = require("express");
const router = express.Router();

const products = require("../data/products");

//Get All Users 
router.route("/")
    .get((req, res) => {
        res.json(products);
    })

    module.exports = router;