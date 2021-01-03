const express = require('express');
const mongoose = require('mongoose');
const User = require('../Database/User'); 

const route = express.Router();

route.post('/', async(req,res)=>{
    const profile_picture = req.files.image;
    console.log(profile_picture);
    profile_picture.mv('./public/'+profile_picture.name, function(err){
        if(err){
            console.group('err');
            res.json({"status": "File not uploaded"});
        }
    });
    const{username, password, email, location} = req.body;
    let exists = false;
    await User.findOne({
       username: username
   }, function (err, existingUser) {
    if(existingUser) {
        exists = true;
    }
   });
   console.log(exists);
   if(exists) res.send('Username already exists');
   else{
    let user = {};
    user.username = username;
    user.password = password;
    user.email = email;
    user.location = location;
    user.profile_picture = profile_picture.name;
    let userModel = new User(user); 
    await userModel.save();
    res.json(userModel);
   }
   
})

module.exports = route;