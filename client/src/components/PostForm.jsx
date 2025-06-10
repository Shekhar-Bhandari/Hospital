import { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // Change imageUrl string to a File object (null if no file chosen)
  const [imageFile, setImageFile] = useState(null);
  // For preview or showing existing image URL
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title || '');
      setContent(editingPost.content || '');
      setImagePreview(editingPost.imageUrl || '');
      setImageFile(null); // reset file input on edit load
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the data, including the selected file, back to parent
    onSubmit({ title, content, imageFile });

    // Reset states after submit
    setTitle('');
    setContent('');
    setImageFile(null);
    setImagePreview('');
  };

  // When user selects a file, update file state and preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreview('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          placeholder="Enter a compelling title for your post..."
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Content Textarea */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          placeholder="Write your content here... Share details, descriptions, or any additional information."
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
        />
      </div>

      {/* Image Upload Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        
        {/* Custom File Upload Button */}
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="image-upload"
          />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              {/* Plus Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              
              {/* Upload Text */}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Click to upload an image
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
              
              {/* Additional Help Text */}
              <p className="text-xs text-gray-400">
                Or drag and drop your image here
              </p>
            </div>
          </div>
        </div>

        {/* Show selected file name */}
        {imageFile && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              <span className="font-medium">Selected:</span> {imageFile.name}
            </p>
          </div>
        )}
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image Preview
          </label>
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full max-h-64 object-contain rounded-lg border border-gray-200 shadow-sm"
            />
            {/* Remove Preview Button */}
            <button
              type="button"
              onClick={() => {
                setImageFile(null);
                setImagePreview('');
                // Reset file input
                const fileInput = document.getElementById('image-upload');
                if (fileInput) fileInput.value = '';
              }}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>{editingPost ? 'Update Post' : 'Create Post'}</span>
      </button>
    </form>
  );
};

export default PostForm;