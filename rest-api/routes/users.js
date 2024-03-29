const express = require ("express");
const router = express.Router(); 

const users = require("../data/users");
const posts = require("../data/posts");
const error = require("../utilities/error");

// GET All Users 
router.route("/")
    .get((req, res) => {
      const links = [
        {
          href: "users/:id",
          rel: ":id",
          type: "GET",
        },
      ];
      res.json({users, links})
    })
    .post((req, res) => {
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
          } else next(error(400, "Insufficient Data"))
    })

// Get User By ID
router.route("/:id")
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);
        const links = [
          {
            href: `/${req.params.id}`,
            rel: "",
            type: "PATCH",
          },
          {
            href: `/${req.params.id}`,
            rel: "",
            type: "DELETE",
          },
        ];

        if (user) res.json({user, links});
        else next();
    })
    .patch((req, res, next) => {
        const user = users.find((u, i) => {
            if(u.id == req.params.id){
                for( const key in req.body){
                    users[i][key] = req.body[key]
                }
                return true;
            }
        })
        if (user) res.json(user);
        else next ();
    })
    .delete((req, res, next) => {
        const user = users.find((u, i) => {
          if (u.id == req.params.id) {
            users.splice(i, 1);
            return true;
          }
        });
    
        if (user) res.json(user);
        else next();
      });

  
// Get Posts by User ID
router.route("/:id/posts")
  .get((req, res) => {
  userId = req.params.id;
  const user = users.find((u) => u.id == userId)
  if(!user){
      return res.status(404).json({error: "User not found"})
  }
  const userPosts = posts.filter((p) => p.userId == userId)
  res.json(userPosts)
  })

      module.exports = router;