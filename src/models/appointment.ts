import mongoose from "mongoose";

type AppointmentType = {
    doctorID: string,
    userID: string,
    time: string,
    status: string
};

const AppointmentSchema = new mongoose.Schema<AppointmentType>({
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
    status: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const Appointment = mongoose.model("Appointment", AppointmentSchema);