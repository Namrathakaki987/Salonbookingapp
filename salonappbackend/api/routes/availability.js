
import express from 'express';
import { setAvailability } from '../controllers/availabilityController.js'; // 

const router = express.Router();

// route for setting availability
router.post('/', setAvailability);

export default router;
