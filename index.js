const express = require ('express');
const app = express();
const dotenv = require( 'dotenv' );
const mongoose = require('mongoose')
//Import routes
const authRoute = require('./route/auth');
const postRoute = require('./route/post');

dotenv.config();

//Connect tp DB
mongoose.connect(process.env.DB_CONNECT),
 console.log('Connected to DB')

//Midlleware
app.use(express.json());

//Routes middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up and running'));