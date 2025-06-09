const express = require('express')
const {body}= require('express-validator')

const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware.js')
const router = express.Router()


router.post('/register',[
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],authController.register)


router.post('/login',[
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],authController.login)
router.get('me', authMiddleware, async (req, res) => {
    res.send('protected route User ID')
});


module.exports = router