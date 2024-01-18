import './loadEnv.js'
import { conn } from './db/conn.js'; conn();
import express from 'express';
import morgan from 'morgan'; 

import gradesRoutes from './routes/grades.js';
// import grades from './routes/grades.js';

const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());

app.use('/grades', gradesRoutes)
// app.use('/grades', grades)

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