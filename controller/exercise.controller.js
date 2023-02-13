const User = require("../models/user.model")

const postExercise = async (req, res) => {
  try {

    const { id } = req.params
    let { description, duration, date } = req.body


    if (date) {
      date = new Date(date).toDateString()
    } else {
      date = new Date().toDateString()
    }


    let user = await User.findByIdAndUpdate(id, { description, duration, date }, { new: true })



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
    res.json(user)

  } catch (error) {

    console.log(error);
  }
}

module.exports = postExercise