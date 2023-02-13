const User = require('../models/user.model.js')

const getUsers = async (req, res) => {

    try {
        const users = await User.find().select('_id username')
        res.send(users)
    } catch (error) {
        console.log('errors')
    }
}


const createUser = async (req, res) => {
    try {
        let newUser = await User.create({ username: req.body.username })
        newUser = newUser.toObject()
        delete newUser.log
        res.json(newUser)
    } catch (error) {
        console.log(error);
    }
}

const delteUsers = async (req, res) => {
    try {
        const newUser = await User.deleteMany()
        res.json(newUser)
    } catch (error) {
        console.log(err);
    }
}

module.exports = {
    getUsers,
    createUser,
    delteUsers
}