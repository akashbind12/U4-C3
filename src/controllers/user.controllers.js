const express = require("express");

const User = require("../models/user.models");

const upload = require("../middlewares/uploads")

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.post("/register", upload.any("profileImage"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const user = await User.create({
      firstName: req.body.firstName,
      lastName : req.body.firstName,
      age : req.body.firstName,
      email : req.body.firstName,
      profilePic: filePaths,
      
    });

    // firstName: { type: String, required: true },
    // lasttName: { type: String, required: false },
    // age : { type: Number, required: true },
    // email : { type: String, required: false , unique : true},
    // profileImage: [{ type: String, required: true }],

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



module.exports = router;
