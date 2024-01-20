const express = require("express")
const app = express();
const PORT = 3000 || process.env.PORT; 
const morgan = require("morgan");

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

// app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(logger);

// This was code used for the View Engine
app.get('/',(req, res) => {
    res.render('index', { title: 'Home' });
})

app.get('/about-express',(req, res) => {
    res.render('about-express')
})

// downloading img 
app.get('/download-img', (req, res) => {
    res.download("./images/GWN.jpeg")
})

// imported from Routes folder
const userRouter = require('./routes/users');

// makes this so it can use /users
app.use('/users',userRouter)

function logger(req, res, next){
    console.log(`this is the logger: ${req.originalUrl}`);
    next();
}

//error middleware
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
})