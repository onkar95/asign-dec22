const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
  }

const authRoutes = require('./route/user');
app.use(cors(corsOptions));
app.use(express.json());
app.use(authRoutes);

const mongoDB = "mongodb+srv://onkar:onkar@cluster0.qey1d.mongodb.net/sample?retryWrites=true&w=majority";


mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(res => { console.log('db cnnected') }).catch(err => { console.log(err) })



const port = process.env.PORT || 5000

app.listen(port, () => { console.log(` listining at ${port}`) })

