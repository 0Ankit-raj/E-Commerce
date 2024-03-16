const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    }
})
userschema.methods.generateAuthToken = async function() {
    const user = this    
    const token = await jwt.sign({_id:user._id.toString()},'thisisnewcourse')
    return token
 }

const User = mongoose.model('CUSTOMER',userschema);
module.exports= User;