const express  =  require('express');
const router = express.Router()
const mongoose = require('mongoose')
const USER = mongoose.model("USER")
const bcrypt = require('bcrypt')

router.get('/', (req,res) => {
    res.send("hello")
})

router.post("/signup", (req,res) => {

    const { name,userName,email,password } = req.body
    if(!name || !userName || !email || !password){
        res.status(422).json({error :"fill all the details"})
    }
    USER.findOne({ email:email })
        .then((savedUser) =>{
            if(savedUser){
                return res.status(422).json({error:"User already exists"})

            }
            bcrypt.hash(password, 12).then((hashedPassword) => {
                const user = new USER({
                    name,
                    email,
                    userName,
                    password : hashedPassword
                })
    
                user.save()
                .then(user => { res.json({message: "Register successfully"}) })
                .catch(err => {console.log(err)})
            })
            

    })

})

router.post("/signin", (req,res) => {

    const {email,password} = req.body

    if (!email || !password) {
        return res.status(422).json({error:"Please add Email and Password"})
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if (!savedUser) {
            return res.status(422).json({error:"Invalid email"})
        }
        bcrypt.compare(password,savedUser.password).then((match) => {
            if(match){
                res.status(200).json({message:"Login Successfully"})
            }else {
                return res.status(422).json({error:"Invalid password"})
            }
        })
            .catch(err=>console.log(err))
    })
})

module.exports = router;