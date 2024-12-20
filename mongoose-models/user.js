const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email_address: { type: String, required: true},
    password: { type: String, required: true}
  });
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;