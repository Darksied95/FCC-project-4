const mongoose = require('mongoose')
const User = require('../models/user.model.js')

const getUsers = (req, res) => {
    console.log('working get')
}


const createUser = async (req, res) => {
    try {
        const newUser = await User.create({ username: req.body.username })
        res.json(newUser)
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getUsers,
    createUser
}