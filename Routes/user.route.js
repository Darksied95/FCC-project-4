const express = require('express')
const Router = express.Router()
const { getUsers, createUser, delteUsers } = require('../controller/user.controller')
const postExercise = require("../controller/exercise.controller")

Router.route('/').get(getUsers).post(createUser).delete(delteUsers)
Router.post('/:id/exercises', postExercise)

module.exports = Router