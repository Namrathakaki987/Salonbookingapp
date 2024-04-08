import Availability from "../models/Availability.js";

//  function for setting availability
export const setAvailability = async (req, res) => {
  const { availability } = req.body;

  try {
    const newAvailability = new Availability({ availability });

    await newAvailability.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Availability set successfully",
        data: newAvailability,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to set availability",
        error: error.message,
      });
  }
};
