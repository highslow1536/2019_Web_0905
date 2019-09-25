const express = require('express')
var cors = require('cors')
const app = express()
const port = 3004

const {userRouter} = require('./routes/user')

app.use(express.json());
app.use(cors())

app.use(express.static('public'))
app.use('/user',userRouter)

app.listen(port, () => {
    console.log("Server "+port+"is start....")
})