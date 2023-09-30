import mongoose from "mongoose";

type DoctorType = {
    username: string,
    email: string,
    password: string,
    avatarUrl: string,
    expertise: string,
    rating: number,
    gender: string
}

const DoctorSchema = new mongoose.Schema<DoctorType>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png"
    },
    expertise: {
        type: String
    },
    rating: {
        type: Number
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", DoctorSchema);