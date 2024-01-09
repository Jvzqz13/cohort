const express = require("express"); 
const app = express(); 
const PORT = 3000; 

const users = require("./routes/users");
const posts = require("./routes/posts");

const error = require("./utilities/error")

// Json body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// New logging middleware to help us keep track of requests during testing
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});


// Valid API Keys.
apiKeys = ["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"];

// middleware to check for API keys!
// Note that if the key is not verified,
// we do not call next(); this is the end.
// This is why we attached the /api/ prefix
// to our routing at the beginning!
app.use("/api", function (req, res, next) {
  var key = req.query["api-key"];

  // Check for the absence of a key.
  if (!key) next(error(400, "API Key Required"))

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) next(error(401, "Invalid API Key"));


  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});



// Using our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);


// Adding some HATEOAS links.
app.get("/", (req, res) => {
  res.json({
    links: [
      {
        href: "/api",
        rel: "api",
        type: "GET",
      },
    ],
  });
});

// Adding some HATEOAS links.
app.get("/api", (req, res) => {
  res.json({
    links: [
      {
        href: "api/users",
        rel: "users",
        type: "GET",
      },
      {
        href: "api/users",
        rel: "users",
        type: "POST",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "GET",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "POST",
      },
    ],
  });
});

// Custom 404 middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
})

// Error-handling middleware.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});


app.listen(PORT, () => {
    console.log("its working");
})