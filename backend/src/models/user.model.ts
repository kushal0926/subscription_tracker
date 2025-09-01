import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true, //whitespace trimmer
        minLength: 4,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 100,
        match: [/\S+@\S+\.\S+/, "Please fill up a valid email address"], //eg: example@gmail.com
    },
    password: {
        type: String,
        required: [true, "User password is required"],
        minlength: 6
    }

}, { timestamps: true });

const User = model("User", userSchema);

export default User;