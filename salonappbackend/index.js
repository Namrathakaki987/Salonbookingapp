import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"
import usersRoute from "./api/routes/users.js"
import availabilityRoute from "./api/routes/availability.js";
import bookingRoutes from "./api/routes/bookingRoutes.js"
import availableSlotsRoutes from "./api/routes/availableSlotsRoutes.js"


import cookieParser from "cookie-parser";
const app=express();
dotenv.config();

const connect = async () => {
try{
    await mongoose.connect("mongodb+srv://user:EQ8W19863ZPkKK2L@cluster.fecqgpc.mongodb.net/booking");
    console.log("Connected to mongodb")
} catch(error){
    throw error
}
};

app.get("/",(req,res)=>{
    res.send("hello")
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

//middleware
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/availability", availabilityRoute);
app.use('/api/bookings', bookingRoutes);
app.use('/api/available-slots', availableSlotsRoutes);


app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack

    })
})


app.listen(8800,()=>{
    connect()
    console.log("Connected to backend")
});