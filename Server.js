const express  =  require('express')
const app =   express()
const PORT  =  5000
const cors = require("cors")
const db   =  require('./Db/db')

app.use(cors())
require('./Models/model')
app.use(express.json())
app.use(require("./Routes/auth"))


app.listen(PORT , ()=>{
    console.log(`Server is running on PORT  :  ${PORT}`)
})