import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostForm from '../components/PostForm';
import {Link} from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token'); // get token once

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get('https://hospital-3u6v.onrender.com/api/posts', axiosConfig);
      setPosts(res.data);
    } catch (error) {
      console.error("Failed to fetch posts", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async ({ title, content, imageFile }) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (imageFile) formData.append('image', imageFile);

    const res = await axios.post('https://hospital-3u6v.onrender.com/api/posts', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    setPosts([...posts, res.data]);
  } catch (error) {
    console.error("Failed to add post", error.response?.data || error.message);
  }
};

const updatePost = async ({ title, content, imageFile }) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (imageFile) formData.append('image', imageFile);

    const res = await axios.put(`https://hospital-3u6v.onrender.com/api/posts/${editingPost._id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    setPosts(posts.map(p => p._id === editingPost._id ? res.data : p));
    setEditingPost(null);
  } catch (error) {
    console.error("Failed to update post", error.response?.data || error.message);
  }
};

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://hospital-3u6v.onrender.com/api/posts/${id}`, axiosConfig);
      setPosts(posts.filter(p => p._id !== id));
    } catch (error) {
      console.error("Failed to delete post", error.response?.data || error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Helper function to get the full image URL
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '';
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) return imageUrl;
    // If it starts with /uploads, prepend the server URL
    if (imageUrl.startsWith('/uploads')) {
      return `https://hospital-3u6v.onrender.com${imageUrl}`;
    }
    // Otherwise, assume it's a relative path and add /uploads/
    return `https://hospital-3u6v.onrender.com/uploads/${imageUrl}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  md:flex-row">
      {/* Sidebar */}
      <div className="flex flex-col gap-10 w-full md:w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">Dashboard</h2>
        <button
          onClick={logout}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
        >
          Logout
        </button>

        {/*Appointment*/}
       
<button
  className="block text-center bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
  onClick={() => {
    navigate('/appointview'); // Navigate programmatically
  }}
>
  Appointment
</button>
{/*contacts*/}
<Link
  to='/contactview'
  className="block text-center bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
>
  Contacts
</Link>

      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            {editingPost ? 'Edit Appointment / Post' : 'Create New Appointment / Post'}
          </h3>
          <PostForm onSubmit={editingPost ? updatePost : addPost} editingPost={editingPost} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">All Appointments / Posts</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post._id} className="bg-white p-4 rounded-lg shadow">
                {post.imageUrl && (
                  <img
                    src={getImageUrl(post.imageUrl)}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded mb-4"
                    onError={(e) => {
                      console.log('Image failed to load:', getImageUrl(post.imageUrl));
                      e.target.onerror = null;
                      e.target.src = '/images/default.jpg';
                    }}
                  />
                )}
                <h4 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="text-blue-900 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePost(post._id)}
                    className="text-blue-900 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Dashboard;