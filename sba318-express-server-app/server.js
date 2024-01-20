const express = require("express");
const app = express(); 
const PORT = 3000; 
const morgan = require("morgan");



//Importing Routes
const users = require("./routes/users");
const products = require("./routes/products");
const reviews = require("./routes/reviews");

const error404 = require("./utilities/middlewares/error404")

// Middleware
app.use(morgan('dev'));
app.set('view engine', 'ejs');

//Json body Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//view engine
app.set("view engine", "ejs")
app.use("/public", express.static('public'))

//Using Routes
app.use("/users", users);
app.use("/products", products);
app.use("/reviews", reviews);


app.get('/', (req, res) => {
    res.render("index")
})


// 404 Error
app.use(error404);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
