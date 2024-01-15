const express = require("express");
const router = express.Router();

const products = require("../data/products");
const users = require("../data/users");

//Get All Products 
router.route("/")
    .get((req, res) => {
        res.json(products);
    })
    .post((req, res) => {
        if( req.body.userId && req.body.product && req.body.description){
            const product = {
                productId: products[products.length - 1].productId + 1,
                userId: req.body.userId ,
                product: req.body.product,
                description: req.body.description
            };

            products.push(product)
            res.json(products[products.length - 1])
        }
        else res.status(404).json({error: "Insufficient Data"})
    })

// GET Product By Id
router.route("/:id")
    .get((req, res) => {
        const product = products.find((p) => p.productId == req.params.id)

        if(!product){
            return res.status(404).json({error: "Product Not Found"})
        } else {
            res.json(product)
        }

    })
    .patch((req, res) => {
        const product = products.find((p, i) => {
            if(p.productId == req.params.id) {
                for (const key in req.body) {
                    products[i][key] = req.body[key];
                }
                return true;
            }
        })
        if(product) res.json(product)
        else res.status(404).json({error: "Cant find Product"})
    })
    .delete((req, res) => {
        const product = products.find((p, i ) => {
            if(p.productId == req.params.id){
                products.splice(i, 1);
                return true;
            }

        })

        if(product) res.json(product)
        else res.status(404).json({error:"Cant find Product"})

    })


    module.exports = router;