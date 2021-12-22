const router = require('express').Router()

const auth = require('../middleware/auth');

router.post('/signupUser', auth.signupUser)
router.get('/user', auth.userData)

module.exports = router