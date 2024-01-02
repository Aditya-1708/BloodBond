import express from "express";
import crypto from "crypto";
import path from "path";
import bodyParser from "body-parser";
import adminController from "./src/admins/controller"
import userController from "./src/users/controller"
import bcrypt from "bcrypt";
const app=express()
app.use(bodyParser.json());
const saltrounds=10;

async function encryptOTP(message,key,iv){
    const cipher=crypto.createCipheriv('aes-256-gcm',Buffer.from(key,'hex'),Buffer.from(iv,'hex'));
    let encrypted = cipher.update(message,'utf-8','hex');
    encrypted+=cipher.final('hex');
    const tag=cipher.getAuthTag();
    return{encrypted,tag};
}
//PUT THIS IN THE FRONTEND
// function decryptMessage(encryptedMessage, key, iv, tag) {
//     const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
//     decipher.setAuthTag(Buffer.from(tag, 'hex'));
//     let decrypted = decipher.update(encryptedMessage, 'hex', 'utf-8');
//     decrypted += decipher.final('utf-8');
//     return decrypted;
// }

async function genOTP(){
    try{
        return Number(Math.floor(1000000*Math.random()));
    }
    catch(error){
        throw error;
    }
}

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

app.post('/admins/generateOTP',async(req,res)=>{
    const otp=await genOTP();
    const email=req.body.email;
    await emailOTP(email);    //send email using agora etc

});

app.post('/admins/verifyEmail',async(req,res)=>{
    const email=req.body.email;
    if(adminController.checkEmailExists(email).length>0){
        res.status(403).json({ message: 'Admin already exists' });
    }
    else{
        res.status(200).json({message:'accept email'});
    }
});
app.post('/admins/signup',async(req,res)=>{
    const details=req.body;

});
app.post('/admins/signin',);
//user routes
app.post('/users/signup',async(req,res){
});
app.post('/users/signin',async(req,res){

});
app.listen(4000);

