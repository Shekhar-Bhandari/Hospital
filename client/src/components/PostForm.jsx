import { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title || '');
      setContent(editingPost.content || '');
      setImageUrl(editingPost.imageUrl || '');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, imageUrl });
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        value={content}
        placeholder="Enter content"
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={imageUrl}
        placeholder="Enter image URL"
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        {editingPost ? 'Update' : 'Add'} Post
      </button>
    </form>
  );
};

export default PostForm;
