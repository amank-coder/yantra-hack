const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./databse/db')
const userRoute = require('./routes/userRoute')
const courseRoute = require('./routes/courseRoute')
const adminRoute  = require('./routes/adminRoute')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("Server is working!")
})
app.use("/uploads", express.static("uploads"));

app.use("/api", userRoute)
app.use("/api", courseRoute)
app.use("/api", adminRoute)

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
    connectDB()
})