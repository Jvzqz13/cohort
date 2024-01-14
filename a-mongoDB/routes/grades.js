import express from "express";
import { ObjectId } from "mongodb";
import db from '../db/conn.js';

const router = express.Router();


router.get('/:id', async (req, res) => {
    const collection = await db.collection('grades')
    const query = {_id: new ObjectId(req.params.id)}
    const result = await collection.findOne(query)

    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
})

export default router;
