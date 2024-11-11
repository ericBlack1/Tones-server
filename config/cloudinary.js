const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config

cloudinary.config({
    cloud_name: 'de1wet4jf',
    api_key: '673381768423211',
    api_secret: '5AkaMQsiK2fDmwcCK6uQi9mretk'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'user_profiles',
        allowed_formats: ['jpeg', 'png', 'jpg'],
    },
});

module.exports = { cloudinary, storage };