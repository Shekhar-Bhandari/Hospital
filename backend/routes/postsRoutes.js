const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const postsController = require('../controllers/postsController');
const authMiddleware = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

// Public: get all posts
router.get('/', postsController.getPosts);

// Admin-only routes for creating, updating, deleting posts
router.post(
  '/',
  [
    check('title', 'Title is required').notEmpty(),
    check('content', 'Content is required').notEmpty()
  ],
  authMiddleware,
  authorizeRole('admin'),
  postsController.createPost
);

router.put('/:id', authMiddleware, authorizeRole('admin'), postsController.updatePost);

router.delete('/:id', authMiddleware, authorizeRole('admin'), postsController.deletePost);

module.exports = router;
