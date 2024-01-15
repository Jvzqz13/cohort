const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews");
const users = require("../data/users");

//GET All Reviews 
router.route("/")       
    .get((req, res) => {        //GET ALL REVIEWS
        res.json(reviews);
    })
    .post((req, res) => {       //CREATES REVIEW
        if (req.body.productId && req.body.userId && req.body.reviewContent){
            const review = {
                reviewId: reviews[reviews.length - 1].id + 1,
                productId: req.body.productId,
                userId: req.body.userId,
                reviewContent: req.body.reviewContent,
            };

            reviews.push(review);
            res.json(reviews[reviews.length - 1])
        } else res.status(404).json({error: "Insufficient Data"});
    })

//GET REVIEW BY ID
router.route("/:id")
    .get((req, res) => {         //GET REVIEW BY ID
         req.query.userId;
         req.query.productId;

        const review = reviews.find((r) => r.reviewId == req.params.id);

        if(review) res.json(review)
        else res.status(404).json({error: "Review Not Found"})
    })
    .patch((req, res) => {      //UPDATE REVIEW
        const review = reviews.find((r, i) => {
            if(r.reviewId == req.params.id){
                for ( const key in req.body) {
                    reviews[i][key] = req.body[key];
                }
                return true;
            }
        })
        if (review) res.json(review)
        else res.status(404).json({error: "Review not found"})
    })
    .delete((req, res) => {
        const review = reviews.find((r, i) => {
            if(r.reviewId == req.params.id){
                reviews.splice(i, 1)
                return true;
            }
        })
        if (review) res.json(review);
        else res.status(404).json({error: "Cannot find the user"})

    })



    module.exports = router;