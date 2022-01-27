const db = require('../../_db/models/')

module.exports = {
    some: payload => db.User.findOne({ where: payload })
}