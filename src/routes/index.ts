import { Router } from "express";
import { getProfileDetails } from "../contoller/profile";




const router = Router();



router.get('/api', getProfileDetails);



export default router;