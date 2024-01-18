import {Router} from 'express';
import User from '../models/users.js';


const router = new Router(); 

//GET - All users
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users); 
})

//GET - Get by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (e){
        console.log(e.message);
    }
})

//POST - Create User
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(203).json(user);
    } catch (e){
        console.log(e);
    }
})

//PATCH - UPDATE ID
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate();
    } catch (e){
        console.log(e.message);
    }
})






export default router; 