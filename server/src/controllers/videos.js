const Videos = require('../models/videos')
const Subjects = require('../models/subjects')

exports.getAllVideos = (req,res,next) => {
    Videos.find()
    .then(result => {
        res.status(200).json({
            message: 'Videos fetched successfully',
            data: result
        })
    })
    .catch(err => next(err))
}

exports.getVideoById = (req, res, next) => {
    Videos.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            message: 'Video fetched successfully',
            data: result
        })
    })
    .catch(err => next(err))
}

exports.addVideo = (req, res, next) => {
    if (!req.files) {
        const err = new Error('Upload image file is required')
        err.errorStatus = 422;
        throw err;
    }

    Subjects.find({name: req.body.subject})
    .then(result => result)
    .then(sub => {
        new Videos({
            title: req.body.title,
            subject: {
                subject_id: sub[0]._id.toString(),
                name: req.body.subject
            },
            thumbnail: req.files[0].path,
            likes: [],
            comments: []
        })
        .save()
        .then(result => {
            res.status(201).json({
                message : "Video Posted Successfully",
                data : result
            });
        })
        .catch(err => console.log(err))
    })

}