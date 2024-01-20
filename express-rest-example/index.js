const express = require('express');
const app = express(); 
const PORT = 3000;


const users = require('./data/users');
const posts = require('./data/posts');

app.get("/",(req, res) => {
    res.send('Work in progress')

})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})