const { saveUser, fetchUsers } = require("../models/user-model.js");

function loginUser(req, res) {
    fetchUsers(req.body).then(({user}) => {
        res.status(200).send({user})
    }).catch((err) => {
        console.error(err)
    })
}

function postUser(req, res) {
    saveUser(req.body)
        .then((user) => {
            res.status(201).send({ user })
        })
        .catch((err) => {
            if(err.message === 'Invalid username or password'){
                return res.status(400).send({msg: err.message})
            }
            console.error(err)
            res.status(500).send({msg: 'Internal server error'})
        })
}

module.exports = { postUser, loginUser }