const express = require('express');
const { register, login,getUserLessons} = require('../controllers/authController');
const { protect } = require('../middleware/projectMeddlewarel');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/my-lesson', protect, getUserLessons);

// الحصول على بيانات المستخدم الشخصية (البروفايل)


module.exports = router;