import express from 'express';
import { createBooking } from '../controllers/bookingController.js';
import { listBookedSlots } from '../controllers/bookingController.js';

const router = express.Router();

// route to booking and list the booked slots
router.post('/', createBooking);
router.get('/',listBookedSlots)

export default router;
