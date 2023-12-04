if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const learningRoutes = require('./src/routes/learning')
const authRoutes = require('./src/routes/auth')
const {verifyToken} = require('./src/middleware/token')

const app = express();
const port = 4000;

app.use(cookieParser())

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        callback(null, `${new Date().getTime()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, callback) => {
    callback(
    null, 
    file.mimetype === 'image/png'
    || file.mimetype === 'image/jpeg' 
    || file.mimetype === 'image/jpg'
    )
}

app.use(cors())

app.use(bodyParser.json())

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(multer({storage: fileStorage, fileFilter}).any())

app.use('/v1/auth',authRoutes)

// app.use(verifyToken)

app.use('/v1/learning',learningRoutes)

mongoose.connect
('mongodb+srv://user07:vsNF6aPltixV6ZFZ@cluster0.8rgdwab.mongodb.net/eLearn?retryWrites=true&w=majority')
.then(() => app.listen(port,() => console.log(`Listening on ${port}...`)))
.catch((err) => console.log(err))

