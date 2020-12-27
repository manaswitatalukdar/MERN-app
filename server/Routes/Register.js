const express = require('express');
const mongoose = require('mongoose');
const User = require('../Database/User'); 

const route = express.Router();

route.post('/', async(req,res)=>{
    const{username, password} = req.body;
    let user = {};
    user.username = username;
    user.password = password;
    let userModel = new User(user); 
    await userModel.save();
    res.json(userModel);
})

module.exports = route;