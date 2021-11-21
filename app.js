const express = require("express")
const app = express()
const mongo = require("mongoose")
const url = "mongodb+srv://test:test@cluster0.dp5gs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema  = require('./schema');
mongo.connect(url).then(()=>console.log("Connected to DB"))

app.use(express.json())

app.post("/add-new-student",async(req,res)=>{
    const studName = req.body.name;
    const studId = req.body.regNo;
    const studMarks = req.body.marks;

    try{
        const newStud = new mySchema({
            name:studName,
            regNo:studId,
            marks:studMarks
        }
        
    )
    const savedStud = await newStud.save()
    res.json(
        {"message":"Student Data saved","data":savedStud}
    )
    }catch(err){
        res.json(err);
    }
})
app.listen(3000,()=>console.log("Express started"))