<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { Client,Pool } from "pg";
import {AuthorizationCode} from "simple-oauth2";
const app=express()
const client
=======
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { Client } from "pg";
const app=express()
>>>>>>> c6cbf97537188079dbaa511bc16ab477c6d0b069
app.use(bodyParser.json());
//admin routes

app.post('/admins/signin',async(req,res){
    const {username,password}=req.body();
<<<<<<< HEAD

=======
>>>>>>> c6cbf97537188079dbaa511bc16ab477c6d0b069
});
//user routes
app.post('/users/signup',async(req,res){

});
app.post('/users/signin',async(req,res){

});
app.listen(4000);

<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c6cbf97537188079dbaa511bc16ab477c6d0b069
