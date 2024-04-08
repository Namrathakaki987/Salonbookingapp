import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookingSchema = new Schema({
    userId: {
        type: Number,
        ref: 'User', // there's a User model for the user who made the booking
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    slot: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    }
});


export default mongoose.model("Booking", bookingSchema)
