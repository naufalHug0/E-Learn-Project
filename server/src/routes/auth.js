const express = require('express')
const userController = require('../controllers/users')
const router = express.Router()

const Users = require('../models/users'); // temporarily 

router.post('/login',userController.login)
router.post('/register',userController.register)

router.get('/logout',userController.logout)
router.get('/token',userController.refreshToken)

// temporarily 
router.get('/user/:id',(req, res) => {
    Users.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            message: 'User fetched successfully',
            data: filterPassword(result)
        })
    })
    .catch(() => res.status(404).json({message: "User Not Found"}))
})

const filterPassword = (obj) => Object.fromEntries(Object.entries(Object.entries(obj)[2][1]).filter(([key, value]) => key !== 'password'));


module.exports = router