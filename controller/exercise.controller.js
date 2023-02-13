const UserExercise = require('../models/exercise.model')
const User = require("../models/user.model")

const postExercise = async (req, res) => {
  try {

    const { id } = req.params
    let { description, duration, date } = req.body
    console.log('BODY', req.body);
    // date = date || new Date().toDateString()

    if (date) {
      date = new Date(date).toDateString()
    } else {
      date = new Date().toDateString()
    }


    let user = await User.findById(id)


    if (!user) {
      user = await User.create({ username: username, description, duration, date })
    } else {
      user = await User.findByIdAndUpdate(id, { description, duration, date }, { new: true })
    }


    const log = {
      description,
      duration,
      date
    }
    user.log.push(log)

    await user.save()
    user = user.toObject()
    delete user.log
    delete user.__v
    console.log('Sent User', user);
    res.json(user)

  } catch (error) {

    console.log(error);
  }
}

module.exports = postExercise