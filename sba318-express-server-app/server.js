const express = require("express");
const app = express(); 
const PORT = 3000; 
const morgan = require("morgan");


//Importing Routes
const users = require("./routes/users");
const products = require("./routes/products");
const reviews = require("./routes/reviews");

app.use(morgan('dev'));
app.set('view engine', 'ejs');


//Json body Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Using Routes
app.use("/users", users);
app.use("/products", products);
app.use("/reviews", reviews);


app.get('/', (req, res) => {
    res.send("its works")
})



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
