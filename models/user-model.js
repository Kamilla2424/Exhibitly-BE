const mongoose = require("mongoose");
const connect = require("../database/connection.js");
const User = require("../mongoose-models/user.js");
const axios = require("axios");

async function fetchUser(id) {
    await connect();
    try {
      const user = await User.findOne({ id });
      mongoose.disconnect();
      return user;
    } catch (err) {
      console.log(err);
    }
    mongoose.disconnect();
  }
  
  async function saveUser() {
    await connect();
    const newBody = {
      id: id,
      display_name: display_name,
      email_address: email_address,
      password: password
    };
    const newUser = new User(newBody);
    await newUser.save();
    mongoose.disconnect();
    return newUser;
  }

  module.exports = { saveUser, fetchUser }