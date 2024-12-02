const express = require('express')
const cors = require('cors')
const connect = require('./database/connection')
const { loginUser, postUser } = require('./controllers/user-controller')

connect()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/healthCheck', (req,res)=>{
    res.status(200).send({msg:"server live"})
})

app.post('/api/user', postUser)

app.get('/api/login', loginUser)

app.get('/api/*' , (req,res) => {
    res.status(400).send({msg:"no route found"})
})

app.listen(9090, () => {
    console.log('Server started on port 9090');
})
