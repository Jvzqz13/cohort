const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews");

//Get All Users 
router.route("/")
    .get((req, res) => {
        res.json(reviews);
    })

    module.exports = router;