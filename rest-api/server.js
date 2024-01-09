const express = require("express"); 
const app = express(); 
const PORT = 3000; 

const users = require("./data/users");
const posts = require("./data/posts");

// Json body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// GET All Users 
app.route("/api/users")
    .get((req, res) => {
        res.json(users);
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
          } else res.json({ error: "Insufficient Data" })
    })

// Get User By ID
app.route("/api/users/:id")
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);
        if (user) res.json(user);
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



// Get All Post
app
  .route("/api/posts")
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else res.json({ error: "Insufficient Data" });
  });


//Get Posts by ID
app
  .route("/api/posts")
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
 
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else res.json({ error: "Insufficient Data" });
  });

app
  .route("/api/posts/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (post) res.json(post);
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });


app.get("/", (req, res) => {
    res.send("Server has Started")
})

// Custom 404 middleware
app.use((req, res,) => {
    res.status(404);
    res.json({error: "Resource Not Found"})
})




app.listen(PORT, () => {
    console.log("its working");
})