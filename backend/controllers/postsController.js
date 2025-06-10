const Post = require('../models/postsModel');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  let imageUrl = '';

  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  try {
    const newPost = new Post({ title, content, imageUrl });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create post' });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  let imageUrl;

  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.title = title || post.title;
    post.content = content || post.content;
    if (imageUrl) post.imageUrl = imageUrl;

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update post' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post' });
  }
};
