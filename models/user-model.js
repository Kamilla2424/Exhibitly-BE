const mongoose = require("mongoose");
const connect = require("../database/connection.js");
const User = require("../mongoose-models/user.js");
const axios = require("axios");

async function fetchUsers() {
    await connect();
    try {
      const users = await User.find({});
      return users
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

  module.exports = { saveUser, fetchUsers }