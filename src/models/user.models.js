const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lasttName: { type: String, required: false },
    age : { type: Number, required: true },
    email : { type: String, required: false , unique : true},
    profileImage: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
