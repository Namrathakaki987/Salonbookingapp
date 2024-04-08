import express from 'express';
import { listAvailableSlots } from '../controllers/availableSlotsController.js';

const router = express.Router();

// route to retrieve available slots for a given date
router.get('/:date', listAvailableSlots);

export default router;

