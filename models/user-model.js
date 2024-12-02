const mongoose = require("mongoose");
const connect = require("../database/connection.js");
const User = require("../mongoose-models/user.js");
const axios = require("axios");

async function fetchUsers(userData) {
    await connect();
    
    if(!userData.username || !userData.password) {
      mongoose.disconnect()
      throw new Error('Username and password are required')
    }
    try {
      const user = await User.findOne({username: userData.username})
      if(!user) {
        mongoose.disconnect()
        throw new Error('Invalid username or password')
      }
  
      if(user && !(userData.password === user.password)) {
        mongoose.disconnect()
        throw new Error('Invalid username or password')
      }

      return {user: {id: user.id, username: user.username}} 
    
    } catch(err){
      console.error(err)
    }
    
    mongoose.disconnect();
  }
  
  async function saveUser(userData) {
    await connect();

    const exisitingUser = await User.findOne({username: userData.username})

    if(exisitingUser) {
      mongoose.disconnect()
      throw new Error('Username already taken')
    }

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