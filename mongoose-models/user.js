const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    image: { type: String, required: true },
    display_name: { type: String, required: true },
    id: { type: String, require: true },
  });
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;