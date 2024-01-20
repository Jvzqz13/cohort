const express = require("express");
const router = express.Router();

const users = require("../data/users");
const reviews = require("../data/reviews")
const products = require("../data/products")

//Get All Users 
router.route("/")
    .get((req, res) => {        //GET ALL USERS
        res.json(users);
    })
    .post((req, res, next) => {  //Create A USER 
        if (req.body.name && req.body.username && req.body.email) {
            if (users.find((u) => u.username == req.body.username)) {
              res.json({ error: "Username Already Taken" });
              return;
            }
      
            const user = {
              id: users[users.length - 1].id + 1,
              name: req.body.name,
              username: req.body.username,
              email: req.body.email,
            };
      
            users.push(user);
            res.json(users[users.length - 1]);
          } else next((req,res) => {
            res.status(404)
            res.json({error: "Insufficient Data"})
          })
        });



//Get User By ID
router.route("/:id")
    .get((req, res) =>{       //GET USER BY ID
        const user = users.find((u) => u.id == req.params.id)
        if (!user){
            return res.status(404).json({error: "User Not Found"})
        }
        else {
            res.json(user);
        }
    })
    .patch((req, res) => {          //UPDATE USER
        const user = users.find((u, i) => {
            if(u.id == req.params.id){
                for(const key in req.body){
                    users[i][key] = req.body[key]
                }
                return true;
            }
        })
        if (user) res.json(user) 
        else next();
    })
    .delete((req, res, next) => {   //DELETE BY USER
        const user = users.find((u,i) => {
            if(u.id == req.params.id){
                users.splice(i,1);
                return true;
            }
        })
        if(user) res.json(user)
        else next()
    })

// GET Reviews by UserID
router.route("/:id/reviews")
    .get((req, res) => {            //GET REVIEW BUT USER ID
        userId = req.params.id;

        const user = users.find((u) => u.id == userId)
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        const userReview = reviews.filter((r) => r.userId == userId)
        res.json(userReview)
    })

// GET Products by UserID
router.route("/:id/products")
    .get((req, res) => {            //GET PRODUCT BY USER ID
        userId = req.params.id;
        
        const user = users.find((u) => u.id == userId)
        if (!user){
            return res.status(404).json({error: "User not found"})
        }
        const userProduct = products.filter((p) => p.userId == userId)
        res.json(userProduct);
    })






    module.exports = router;