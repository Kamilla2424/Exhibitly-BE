const express = require('express')
const cors = require('cors')
const connect = require('./database/connection')

connect()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/healthCheck', (req,res)=>{
    res.status(200).send({msg:"server live"})
})

app.listen(9090, () => {
    console.log('Server started on port 9090');
})
