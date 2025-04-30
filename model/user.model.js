const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      default: uuidv4, // Pass the function reference, not the result
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "student"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
