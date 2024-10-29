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

function getUsers(req, res) {
    fetchUsers().then((users) => {
        res.status(200).send({users})
    })
}

module.exports= { postUser, getUsers }