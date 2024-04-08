import Booking from '../models/Booking.js';

// function to list available slots
export const listAvailableSlots = async (req, res) => {
    try {
        const { date } = req.params;
        const bookedSlots = await Booking.find({ date });
        const totalSlots = 10; 
        const availableSlots = totalSlots - bookedSlots.length;
        res.status(200).json({ success: true, data: availableSlots });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve available slots', error: error.message });
    }
};
