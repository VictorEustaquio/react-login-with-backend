const indexRoutes = require('../features/index/routes')
const authRoutes = require('../features/auth/routes')
const userRoutes = require('../features/user/routes')

module.exports = router => {
    indexRoutes(router)
    authRoutes(router)
    userRoutes(router)
}