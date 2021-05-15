const router = require('express').Router()
const auth = require('./auth.service')

router.post('/users/auth', (req, res, next) => {
    auth.auth(req.body).then(user => res.json({
        message: "authenticated",
        success: true,
        user: user
    }))
    .catch(next)
})

router.get('/users', (req, res, next) => {
    auth.getAll().then(users => res.json(users))
    .catch(next)
})

module.exports = router