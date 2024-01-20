import express from "express";
import { ObjectId } from "mongodb";
import db from '../db/conn.js';

const router = express.Router();

//Use new ObjectID only for _id made by Mongodb

// GET Single id Grade --
router.get('/:id', async (req, res) => {
    const collection = await db.collection('grades')
    const query = {_id: new ObjectId(req.params.id)}
    const result = await collection.findOne(query)

    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
})

// POST Create a single grade entry --
router.post("/", async (req, res) =>  {
    let collection = await db.collection("grades");
    let newDocument= req.body;

    //renaming field for backwards compability 
    if (newDocument.student_id){
        newDocument.learner_id = newDocument.student_id;
        delete newDocument.student_id;
    }
    let result= await collection.insertOne(newDocument);
    res.send(result).status(204);
})

//PATCH - Add a score to a grade entry --
router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("grades");
    let query = {_id: new ObjectId(req.params.id)};

    let result = await collection.updateOne(query, {
        $push: { scores: req.body }
    });
    if (!result) res.status(404).send("Not Found");
    else res.send(result).status(200)
})

//Remove a score from a grade entry --
router.patch("/id/remove", async (req, res) => {
    let collection = db.collection("grades");
    let query = {_id: new ObjectId(req.params.id)};

    let result = await collection.updateOne(query, {
        $pull: { scores: req.body }
    })
});

//DELETE a single grade entry --
router.delete("/:id", async(req, res) => {
    let collection = db.collection("grades");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.deleteOne(query);

    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200);
})


// POST rename fields for backwards compatibilty --
router.post("/", async (req, res) => {
    const collection = await db.collection("grades");
    const newDocument = req.body;
    console.log(newDocument);

    if (newDocument.student_id){
        newDocument.learner_id = newDocument.student_id;
        delete newDocument.student_id;
    }

    let result = await collection.insertOne(newDocument);
    res.send(result).status(404);
})


//GET a Students grade data --
router.get("/student/:id", async (req, res) => {

    res.redirect(`/grades/learner/${req.params.id}`);
    
})


// GET /learner/:id --
router.get("/learner/:id", async (req, res) => {
    let collection = await db.collection("grades")
    let query = { learner_id: Number(req.params.id)};
    
    //Check for class_id param
    if (req.query.class) query.class_id = Number(req.query.class)
    
    let result = await collection.find(query).toArray();
    
    if(!result.length) res.status(404).send("Not Found");
    else res.send(result).status(200);
});

//DELETE learners grade data --
router.delete("/learner/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { learner_id: Number(req.params.id)};

    let result = await collection.deleteOne(query)

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200)
})


//GET Class's grade data
router.get("/class/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { class_id: Number (req.params.id)};
    let result = await collection.find(query).toArray();

    if(!result.length) res.status(404).send("Not Found");
    else res.send(result).status(200);
})

//PATCH - Update a class id
router.patch("/class/:id", async(req, res) => {
    let collection = await db.collection("grades")
    let query = { class_id: Number(req.params.id) };

    let result = await collection.updateMany(query, {
        $set: { class_id: req.body.class_id }
    })
    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200)
});


//DELETE a class
router.delete("/class/:id", async (req, res) => {
    let collection = await db.collection("grades"); 
    let query = { class_id: Number(req.params.id) };

    let result = await collection.deleteMany(query);

    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
})








export default router;
