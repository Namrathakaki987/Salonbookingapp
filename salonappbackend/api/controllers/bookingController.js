import Booking from "../models/Booking.js";

// function to create Booking
export const createBooking = async (req, res) => {
  try {
    const { userId, date, slot } = req.body;
    const existingBooking = await Booking.findOne({
      date,
      "slot.start": slot.start,
      "slot.end": slot.end,
    });
    if (existingBooking) {
      return res
        .status(400)
        .json({ success: false, message: "Slot is already booked" });
    }
    const maxCapacity = 5;
    const bookingsForDate = await Booking.find({ date });
    if (bookingsForDate.length >= maxCapacity) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Maximum capacity reached for this date",
        });
    }
    const newBooking = new Booking({ userId, date, slot });
    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create booking",
        error: error.message,
      });
  }
};


// function to list the booked slots
export const listBookedSlots = async (req, res) => {
  try {
    const bookedSlots = await Booking.find();
    res.status(200).json({ success: true, data: bookedSlots });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve booked slots",
        error: error.message,
      });
  }
};
