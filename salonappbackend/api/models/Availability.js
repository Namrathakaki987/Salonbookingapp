import mongoose from "mongoose";
const {Schema} =mongoose



const availabilitySlotSchema = new mongoose.Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    }
});

const availabilityDaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    slots: {
        type: [availabilitySlotSchema],
        required: true
    }
});

const availabilitySchema = new mongoose.Schema({
    availability: {
        type: [availabilityDaySchema],
        required: true
    }
});




export default mongoose.model("Availability", availabilitySchema)