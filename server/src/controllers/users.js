const Users = require('../models/users');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
    const user = await Users.findOne({ username: req.body.username })
    try {
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            const userEncode = {
                id: user._id,
                name: user.name,
                username: user.username
            }

            if (validPassword) {
                const accessToken = jwt.sign(userEncode, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '15m'
                })
                const refreshToken = jwt.sign(userEncode, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: '1d'
                })
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    maxAge: 24*60*60*1000
                })
                // res.cookie('id',user._id)
                Users.updateOne(
                    { username: req.body.username },
                    { $set: { 'refreshToken': refreshToken }}
                ).then(() => {
                    return res.status(200).json({ 
                        message: "Login Successfull",
                        accessToken,
                        _id: user._id
                    })
                }).catch(err => res.status(500).json({message: err}))
            } else return res.status(404).json({message: "Invalid username or password"})
        } 
        else return res.status(404).json({message: "Invalid username or password"})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

exports.register = async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.body.username })

        if (user) return res.status(400).json({message: 'Username already taken'})
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const Reg = new Users({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
            refreshToken: null,
            profile_picture: '',
            config: {theme: 'light'},
            classes_id: []
        })
    
        Reg
        .save()
        .then(() => {
            res.status(201).json({
                message: 'Registration successful'
            })
        }).catch(err => res.status(500).json({message: err}))

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

exports.logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    
    if(!refreshToken) return res.status(401).json({message: 'User is not authorized to the request'})

    const user = await Users.findOne({refreshToken: refreshToken})
    
    if (user) {
        Users.updateOne(
            { _id: user._id },
            { $set: { 'refreshToken': null }}
        ).then(() => {
            res.clearCookie('refreshToken')
            return res.status(200).json({message: 'logout successful'})
        })
        .catch(err => res.status(500).json({message: "Internal Server Error"}))
    }   
    else return res.status(401).json({message: 'User is not authorized to the request'})
}

exports.refreshToken = (req, res, next) => {
    // return res.json({cookie: req.cookies})
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.status(401).json({message: 'User is not authorized to the request'})

        const user = Users.findOne({refreshToken: refreshToken})
        
        if (user) {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
                if (err) return res.status(403).json({message: 'Forbidden: User not allowed to access'})
                const username = user.username
                const name = user.name
                const accessToken = jwt.sign({username, name}, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '15m'
                })
                return res.status(200).json({accessToken})
            })
        } 
        else return res.status(403).json({message: 'Forbidden: User not allowed to access'})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}