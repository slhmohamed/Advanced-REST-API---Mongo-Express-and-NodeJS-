const mongoose=require('mongoose');
const jwt =require('jsonwebtoken');
const config=require('config');
const Joi = require('joi');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this.id},config.get('jwtPrivateKey'));
    return token;
}
const User =mongoose.model('User',userSchema);

function validateUser(user){
    const schema={
        name:Joi.string().min(2).max(200).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(6).max(20).required(),

    }
    return Joi.validate(user,schema);
} 
exports.User=User
exports.validate=validateUser;