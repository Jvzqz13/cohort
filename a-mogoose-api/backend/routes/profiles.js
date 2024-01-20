import { Router } from 'express';
import Profiles from "../models/profiles.js";

const router = new Router();

router.get('/', async (req, res) => {
    const profiles = await Profiles.find({}).populate({path: "user_id"});
    res.json(profiles)
})


export default router;