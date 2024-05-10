import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { config as configDotenv } from "dotenv";
import studentChart from "./schema/StudentcChart.js";

configDotenv();

const PORT = 5001;

//connect with mongoose 
mongoose.connect("mongodb://localhost:27017/Student_Card").then (()=>{
    console.log("mongodb is connnected");
});

//use express
const app = express();
app.use(express.json());
app.use(cors());

async function main(){


    app.post("/api/studentchart", async(req, res) => {
        const {studentName, attendance }= req.body;

        const student = await studentChart.findOne({studentName: studentName });

       // check student name  find or not
        if(student){
            res.status(400).send({
                err_code:"STUDENT_ALREADY_EXIST",
                message:"Student already exist",
            });
            return;
        }
        const newCharts = new studentChart({
            studentName,
            attendance
        });
        const savedUser = await newCharts.save();

        res.send({
            studentName: savedUser.studentName,
            attendance: savedUser.attendance,
        });
    });
}
app.listen(PORT,() =>{
    console.log("Server has started at PORT ", PORT);
});
main();