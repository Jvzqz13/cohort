import {Router} from 'express';
import User from '../models/users.js';
import Profile from '../models/profiles.js';

const router = new Router(); 

// GET - All users
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users); 
})

//GET - Get by ID
router.get('/:id', async (req, res) => {
    try{

        const user = await User.findById(req.params.id)
        
        if(!user) return res.status(404).json({msg: "Resource not Found"})
        else res.status(200).json(user);

    }catch(e){
        console.log(e.message);
    }
})

//POST - Create User
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        await Profile.create({user_id: user._id})

        res.status(201).json(user);
        
    } catch (e){
        console.log(e);
    }
})

//PUT /:id
router.put('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        const updatedUser = await User.findByIdAndUpdate(id, body, {new: true});
        res.json({updatedUser});
    } catch(e){ 
        console.log(e.message);
    }
})

// Delete /:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({msg: `User Deleted: ${deletedUser._id}`});
    } catch (e) {
        console.log(e.message)
        
    }
})





export default router; 