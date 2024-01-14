import express from 'express';
import './loadEnv.js'


import morgan from 'morgan';
import grades from './routes/grades.js';


const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));

app.use('/grades', grades)
app.use(express.json());

// console.log(process.env.ATLAS_URI);

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});









// Global error handling
app.use((err, req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})