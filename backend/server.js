const express = require("express");
const nodemailer=require('nodemailer');
const crypto = require("crypto");
const path = require("path");
const bodyParser = require("body-parser");
const {sendOTP}=require("./emailService/controller/emailController")
const adminController = require("./src/admins/controller");
const userController = require("./src/users/controller");
const bcrypt = require("bcrypt");
const app=express()
app.use(bodyParser.json());
const saltrounds=10;

// async function encryptOTP(message,key,iv){
//     const cipher=crypto.createCipheriv('aes-256-gcm',Buffer.from(key,'hex'),Buffer.from(iv,'hex'));
//     let encrypted = cipher.update(message,'utf-8','hex');
//     encrypted+=cipher.final('hex');
//     const tag=cipher.getAuthTag();
//     return{encrypted,tag};
// }
//PUT THIS IN THE FRONTEND
// function decryptMessage(encryptedMessage, key, iv, tag) {
//     const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
//     decipher.setAuthTag(Buffer.from(tag, 'hex'));
//     let decrypted = decipher.update(encryptedMessage, 'hex', 'utf-8');
//     decrypted += decipher.final('utf-8');
//     return decrypted;
// }



async function emailOTP(email){
    try{
        //email the otp to the specific email
    }
    catch(error){
        throw error;
    }
}

async function hashPassword(password){
    try{
        const hash=await bcrypt.hash(password,saltrounds);
        return hash;
    }
    catch(error){
        throw error;
    }
}

async function compareOTP(OTPReceived,OTPDatabase){
    try{
        console.log(OTPReceived);
        console.log(OTPDatabase);
        console.log(OTPReceived === OTPDatabase)
        return OTPReceived === OTPDatabase;
    }
    catch(error){
        throw error;
    }
}

async function comparePasswords(hash,password){
    try{
        const match=await bcrypt.compare(password,hash);
        return match
    }
    catch(error){
        throw error;
    }
}

//admin routes
app.post('/admins/emailOTP',sendOTP);

app.post('/admins/verify',async(req,res)=>{
    const {email,OTP}=req.body;
    const results=await adminController.getDetailsForVerification(email);
    if(compareOTP(OTP,Number(results[0].otp))===false){
        res.status(200).json({message:"Email successfully verified"});
    }
    else{
        adminController.deleteEmailIfOTPUnsuccessful(email);
        res.status(400).json({message:"Email verification failed"});
    }
});
// app.post('/admins/signin',);
//user routes
app.post('/users/emailOTP',sendOTP);
// app.post('/users/signup',async(req,res)=>{});
// app.post('/users/signin',async(req,res)=>{});
app.listen(4000);

