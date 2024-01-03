const express = require("express")
const app = express();
const port = 3000;

app.listen(port)
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(logger)



// app.get('/',(req, res) => {
//     console.log('Here');
//     res.render("index", {text: "This is coming from index js"})
    
// })


// imported from Routes folder and has / and /new
const userRouter = require('./routes/users');

// makes this so it can use /users
app.use('/users',userRouter)

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}
