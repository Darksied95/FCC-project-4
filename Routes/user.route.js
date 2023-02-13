const express = require('express')
const Router = express.Router()
const getLogs = require('../controller/log.controller')
const postExercise = require("../controller/exercise.controller")
const { getUsers, createUser, delteUsers } = require('../controller/user.controller')

Router.route('/').get(getUsers).post(createUser).delete(delteUsers)
Router.post('/:id/exercises', postExercise)
Router.get('/:_id/logs', getLogs)

module.exports = Router