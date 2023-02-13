const User = require("../models/user.model")

const getLogs = async (req, res) => {
    let { from, to, limit } = req.query



    if (from && to) {
        from = new Date(from).toDateString()
        to = new Date(to).toDateString()

    }

    try {
        let user

        if (from && to) {
            user = await User
                .findOne({
                    _id: req.params._id,
                    'log.date': {
                        $gte: from,
                        $lte: to
                    }
                })
                .select('-description -duration -date -__v')

        } else {
            user = await User
                .findOne({ _id: req.params._id })
                .select('-description -duration -date -__v')
        }


        limit && (user.log = user.log.slice(0, limit))
        user.count = user.log.length

        res.json(user)

    } catch (error) {

        console.log(error);
    }
}

module.exports = getLogs


