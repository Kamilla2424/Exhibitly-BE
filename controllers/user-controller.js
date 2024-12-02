const { saveUser, fetchUsers } = require("../models/user-model.js");

function postUser(req, res) {
    saveUser(req.body)
        .then((user) => {
            res.status(201).send({ user })
        })
        .catch((err) => {
            console.log(err)
        })
}

function loginUser(req, res) {
    fetchUsers(req.body).then(({user}) => {
        res.status(200).send({user})
    })
}

module.exports = { postUser, loginUser }