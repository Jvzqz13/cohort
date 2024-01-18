import {Router} from 'express';
import Grade from '../models/grades.js';

const router = new Router(); 

//GET - All Users
router.get('/', async (req, res) => {
    const grades = await Grade.find({});
    res.status(200).json(grades);
})


export default router;