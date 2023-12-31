<<<<<<< Updated upstream
=======
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { Client,Pool } from "pg";
import {AuthorizationCode} from "simple-oauth2";
const app=express()
const client
app.use(bodyParser.json());
//admin routes

app.post('/admins/signin',async(req,res){
    const {username,password}=req.body();

});
//user routes
app.post('/users/signup',async(req,res){

});
app.post('/users/signin',async(req,res){

});
app.listen(4000);

>>>>>>> Stashed changes
