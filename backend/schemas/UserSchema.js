const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your Email address is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Your Password is required."]
    },
    username:{
        type: String,
        required: [true, "Your Username is required."],
        unique: true
    }
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

module.exports = UserSchema;