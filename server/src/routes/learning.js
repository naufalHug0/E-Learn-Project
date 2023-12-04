const express = require('express')
const subjectsController = require('../controllers/subjects')
const videoController = require('../controllers/videos');
const token = require('../middleware/token');

const router = express.Router();

router.get('/subjects', subjectsController.getAllSubjects)
router.get('/subject/:id', subjectsController.getSubjectById)
router.post('/subject', subjectsController.addSubject)

router.get('/videos', videoController.getAllVideos)
router.get('/video/:id', videoController.getVideoById)
router.post('/video', videoController.addVideo)

module.exports = router;
