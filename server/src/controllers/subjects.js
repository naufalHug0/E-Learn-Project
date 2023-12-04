const Subjects = require('../models/subjects')

exports.getAllSubjects = (req,res,next) => {
    Subjects.find()
    .then(result => {
        res.status(200).json({
            message: 'Subjects fetched successfully',
            data: result
        })
    })
    .catch(err => next(err))
}

exports.getSubjectById = (req, res, next) => {
    Subjects.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            message: 'Subject fetched successfully',
            data: result
        })
    })
    .catch(err => next(err))
}

exports.addSubject = (req, res, next) => {
    
    if (!req.file) {
        const err = new Error('Upload image file is required')
        err.errorStatus = 422;
        throw err;
    }

    const Subject = new Subjects({
        name: req.body.name,
        icon: req.file.path
    })

    Subject
    .save()
    .then(result => {
        res.status(201).json({
            message : "Subject Added Successfully",
            data : result
        });
    })
    .catch(err => console.log(err))
}