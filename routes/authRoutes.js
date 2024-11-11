const express = require('express');
const { register, login, uploadProfileImage, getProfile } = require('../controllers/authController');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/uploadProfileImage/:userId', upload.single('profileImage'), uploadProfileImage);
router.get('/profile/:userId', getProfile);

module.exports = router;
