import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "local host",
    user:"root",
    password: "sally321",
    database: "test",
})

app.get("/", (req,res)=>{
    res.json("hellow this is the backend")
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})