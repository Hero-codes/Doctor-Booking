import mongoose from "mongoose";

type UserType = {
    username: string,
    email: string,
    password: string,
    avatarUrl: string,
    gender: string
}

const UserSchema = new mongoose.Schema<UserType>({
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
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);