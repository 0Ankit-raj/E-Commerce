const express = require("express");
const User = require("./userschema");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kumarankitverma5:test123@cluster0.bvgikdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri);
// client.connect();

router.post("/register", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    console.log("Fill the fields properly");
    return res.status(422).json({ error: "Fill the fields properly" });
  }
  try {
    const userexists = await User.findOne({ name: name });
    if (userexists) {
      console.log("user already exists");
      return res.status(422).json({ error: "User already exists" });
    }
    const user = new User({ name, password });
    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(500).json({ error: "Registration failed" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    let token;
    const { name, password } = req.body;
    if (!name || !password) {
      console.log("Fill the fields properly");
      return res.status(422).json({ error: "Fill the fields properly" });
    }
    const userLogin = await User.findOne({ name: name });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password,userLogin.password);
      token = await  userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now()+ 25892000000),
        httpOnly:true 
      });
      if(!isMatch)
      {
        res.status(400).json({error:"Invalid credentials"})
      }
      else{
        res.json({message:"Login succesfull"})
      }
    }
    else{
        res.status(400).json({error:"Invalid credentials"})
    }
    
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
