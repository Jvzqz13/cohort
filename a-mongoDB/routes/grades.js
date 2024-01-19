import {Router} from 'express';
import Grade from '../models/grades.js';

const router = new Router(); 

//GET - All Grades
router.get('/', async (req, res) => {
    const grades = await Grade.find({});
    res.status(200).json(grades);
})

//GET Single ID Grade
router.get('/:id', async (req, res) => {
    try {

        const grades = await Grade.findById(req.params.id)
        
        if(!grades) res.status(404).send('Not Found')
        else res.status(200).json(grades)
    } catch(e){
        console.log(e.message);
    }

})

//POST - Create new Learner
router.post('/', async (req, res) => {
    const newDocument = req.body;
    console.log(newDocument);
    
    // changes student_id to learner_id
    if(newDocument.student_id) {
        newDocument.learner_id = newDocument.student_id;
        delete newDocument.student_id
    }

    let result = await Grade.create(newDocument);
    res.send(result).status(204)
})

// GET REDIRECTS student_id to learner_id
router.get('/student/:id', async (req, res) => {
    res.redirect(`/grades/learner/${req.params.id}`);
})

//GETS Learner By ID
router.get('/learner/:id', async (req, res) => {
    const learner = await Grade.findOne({learner_id: req.params.id});

    if(!learner) return res.send('Not Found').status(404);
    else res.send(learner).status(200)
})

//GET Class by ID
router.get('/class/:id', async (req, res) => {
    const classId = await Grade.find({class_id: req.params.id})
    if(classId.length < 1) return res.status(404).send("Not Found")
    else res.send(classId).status(200)
})

// PATCH - UPDATE/ADD a Grade 
router.patch('/:id/scores/add', async (req, res) => {

    const grade = await Grade.findOne({_id: req.params.id})
    
    if(!grade) return res.send("Grade not found")
    grade.scores.push(req.body)
    await grade.save();
    res.send(grade)

})


// PATCH - Remove Scores 
router.patch('/:id/scores/remove', async (req, res) => {

    const grade = await Grade.findOne({_id: req.params.id})
    
    if(!grade) return res.send("Grade not found")
    grade.scores.pull(req.body)
    await grade.save();
    res.send(grade)

})

//DELETE by Class 
router.delete("/class/:id/remove", async (req, res) => {
    const classId = await Grade.deleteOne({class_id: req.params.id})

    if(!classId) return res.send('Class not Found')
    else res.send(classId).status(200)
})

//DELETE Learner By ID
router.delete('/learner/:id/remove', async (req, res) => {
    const learner = await Grade.deleteOne({learner_id: req.params.id});

    if(!learner) return res.send('Not Found').status(404);
    else res.send(learner).status(200)
})


//DELETE by ID 
router.delete('/:id/delete', async (req, res) => {
    const grade = await Grade.deleteOne({_id: req.params.id});

    if(!grade) return res.send("Grade not found");
    else res.send(grade).status(200)
})

export default router;