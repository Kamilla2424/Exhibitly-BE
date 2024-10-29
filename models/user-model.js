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
  
  async function saveUser(userData) {
    await connect();
    const newBody = {
      id: Math.random().toString(16).slice(2),  
      username: userData.username,
      email_address: userData.email_address,
      password: userData.password
    };
    console.log(newBody, "newbody")
    const newUser = new User(newBody);
    await newUser.save();
    mongoose.disconnect();
    return newBody;
  }

  module.exports = { saveUser, fetchUsers }