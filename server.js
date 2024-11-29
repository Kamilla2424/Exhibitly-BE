const express = require('express')
const cors = require('cors')
const connect = require('./database/connection')
const { getUsers, postUser } = require('./controllers/user-controller')

connect()

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get('/api/healthCheck', (req,res)=>{
    res.status(200).send({msg:"server live"})
})

app.post('/api/users', postUser)

app.get('/api/users', getUsers)

app.listen(9090, () => {
    console.log('Server started on port 9090');
})
