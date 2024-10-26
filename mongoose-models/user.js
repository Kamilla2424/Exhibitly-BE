const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    display_name: { type: String, required: true },
    email_address: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String, require: true },
  });
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;