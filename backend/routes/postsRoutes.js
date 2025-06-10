const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const postsController = require('../controllers/postsController');
const authMiddleware = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/', postsController.getPosts);

router.post(
  '/',
  authMiddleware,
  authorizeRole('admin'),
  upload.single('image'),
  postsController.createPost
);

router.put(
  '/:id',
  authMiddleware,
  authorizeRole('admin'),
  upload.single('image'),
  postsController.updatePost
);

router.delete('/:id', authMiddleware, authorizeRole('admin'), postsController.deletePost);

module.exports = router;
