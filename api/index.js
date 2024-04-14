const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db")
const authRoute= require('./routes/authRoute')
const courseRoute = require('./routes/courseRoute')


const PORT = 3000;

const app= express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
app.use(cors());


app.use('/api/auth', authRoute)
app.use('/api/course', courseRoute);

app.listen(PORT, () => {  
    connectDB()
    console.log(`Server running at http://localhost:${PORT}/`);
});
