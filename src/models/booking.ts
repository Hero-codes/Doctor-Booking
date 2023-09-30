import mongoose from "mongoose";

type BookingType = {
    doctorID: string,
    userID: string,
    time: string,
    price: number,
    rating: number
};

const BookingSchema = new mongoose.Schema<BookingType>({
    doctorID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
}, { timestamps: true });

export const Booking = mongoose.model("Booking", BookingSchema);