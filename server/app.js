const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE

mongoose.connect(DB,{

        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
}).then(() =>{
        console.log(`connection succesfull`);
}).catch((err) => console.log(`No connection`));

const middleware = (req,res,next) =>{
        console.log(`This is middleware`);
        next();
}

app.get('/',(req,res) => {
        res.send(`Hello world from server`);
});

app.get('/about',(req,res) => {
        res.send(`Hello this is about page`);
});

app.get('/service',(req,res) => {
        console.log(`Hello this is service`);
        res.send(`Hello this is service page`);
});

app.get('/contact',(req,res) => {
        res.send(`Hello this is contact page`);
});

app.get('/signin',(req,res) => {
        res.send(`Hello this is login page`);
});

app.get('/signup',(req,res) => {
        res.send(`Hello this is registration page`);
});

app.listen(3000, () =>{
    console.log(`Server is running at port 3000`);
});