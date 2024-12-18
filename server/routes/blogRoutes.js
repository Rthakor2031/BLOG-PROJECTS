const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/blogController');
const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
