const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/userModel')
// const multer = require('multer')
// const path = require('path');


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Employee_Management")

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         return cb(null, "../client/vite-project/public/images")
//     },
    
//     filename: function(req, file, cb){
//         return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage})

// app.post('/upload', upload.single('file'), (req, res)=>{
//     console.log(req.body)
//     console.log(req.file)
//     UserModel.create({file: req.file.filename})
//     .then(result=> res.json(result))
//     .catch(err=> res.json(err))
// })

// app.get('/getImage', (req, res)=>{
//     UserModel.find()
//     .then(user=> res.json(user))
//     .catch(err=> res.json(err))
// })

// app.get("/empcard", (req, res) =>{
//     UserModel.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })
app.get("/", (req, res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation,
        age: req.body.age,
        file: req.body.file
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res)=>{ 
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findOneAndDelete({_id:id})
    .then(result=> res.json(result))
    .catch(err=> res.json(err))
})

app.listen(3000, () => {
    console.log("Server is running")
})
