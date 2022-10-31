import { Router } from "express";

const router = Router();

//controlers 
import { getTravel, getTravels, createTravel, updateTravel, deleteTravel } from "../controllers/travelControllers";

router.get('/',getTravels);

router.get('/:id',getTravel );

router.post('/',createTravel);

router.put('/:id',updateTravel);

router.delete('/:id',deleteTravel);

export default router;