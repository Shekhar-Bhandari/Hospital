// import React from 'react';
// import { FaCalendarAlt, FaUser, FaComment, FaEye } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const posts = [
//   {
//     id: 1,
//     title: 'A passion for putting patients first',
//     date: 'Monday, 20, December 2021',
//     author: 'Admin',
//     comments: 12,
//     views: 45,
//     excerpt:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec...',
//     image: 'images/post1.webp',
//   },
//   {
//     id: 2,
//     title: 'A passion for putting patients first',
//     date: 'Monday, 20, December 2021',
//     author: 'Admin',
//     comments: 12,
//     views: 45,
//     excerpt:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec...',
//     image: 'images/post2.jpg',
//   },
//   {
//     id: 3,
//     title: 'A passion for putting patients first',
//     date: 'Monday, 20, December 2021',
//     author: 'Admin',
//     comments: 12,
//     views: 45,
//     excerpt:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec...',
//     image: 'images/post3.jpg',
//   },
//   {
//     id: 4,
//     title: 'A passion for putting patients first',
//     date: 'Monday, 20, December 2021',
//     author: 'Admin',
//     comments: 12,
//     views: 45,
//     excerpt:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec...',
//     image: 'images/poat5.avif',
//   },
// ];

// const BlogCard = ({ post }) => (
//   <div className="mb-10 border-b pb-6">
//     <img src={post.image} alt="Post" className="w-full h-auto rounded-md shadow" />
//     <div className="text-sm text-gray-500 mt-3 flex flex-wrap gap-4">
//       <span><FaCalendarAlt className="inline mr-1" /> {post.date}</span>
//       <span><FaUser className="inline mr-1" /> {post.author}</span>
//       <span><FaComment className="inline mr-1" /> {post.comments}</span>
//       <span><FaEye className="inline mr-1" /> {post.views}</span>
//     </div>
//     <h3 className="text-xl font-semibold text-blue-900 mt-3">{post.title}</h3>
//     <p className="text-gray-700 mt-2">{post.excerpt}</p>
//     <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//    <Link to={`/single-news/${post.id}`}>Read More</Link>

//     </button>
//   </div>
// );

// const Sidebar = () => (
//   <div className="space-y-8">
//     {/* Search */}
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full p-3 border rounded shadow-sm"
//       />
//     </div>

//     {/* Recent Posts */}
//     <div>
//       <h4 className="text-lg font-bold text-blue-900 mb-3">Recent Posts</h4>
//       <ul className="space-y-3 text-sm text-gray-800">
//         {posts.slice(0, 4).map(post => (
//           <li key={post.id} className="flex gap-3 border-b pb-2 items-start">
//             <img src={post.image} alt="thumb" className="w-12 h-12 object-cover rounded" />
//             <div>
//               <p className="text-blue-700 text-xs">{post.date}</p>
//               <p>{post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Categories */}
//     <div>
//       <h4 className="text-lg font-bold text-blue-900 mb-3">Categories</h4>
//       <ul className="text-sm text-gray-800 space-y-2">
//         <li className="flex justify-between">Surgery <span className="text-blue-700">3</span></li>
//         <li className="flex justify-between">Health Care <span className="text-blue-700">6</span></li>
//         <li className="flex justify-between">Medicine <span className="text-blue-700">4</span></li>
//         <li className="flex justify-between">Professional <span className="text-blue-700">10</span></li>
//       </ul>
//     </div>
//   </div>
// );

// const BlogPage = () => (
//   <div className="bg-white font-sans">
//     {/* Hero Section */}
//     <div className="relative bg-blue-50 text-center py-16">
//       <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(images/header.jpg)' }}></div>
//       <div className="relative z-10">
//         <p className="text-sm text-blue-800">Home / News</p>
//         <h2 className="text-4xl font-bold text-blue-900 mt-2">Blog Posts</h2>
//       </div>
//     </div>

//     {/* Content Section */}
//     <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
//       {/* Blog Cards */}
//       <div className="md:col-span-2">
//         {posts.map(post => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>

//       {/* Sidebar */}
//       <Sidebar />
//     </div>
//   </div>
// );

// export default BlogPage;




import React from 'react';
import { FaCalendarAlt, FaUser, FaComment, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'A passion for putting patients first',
    date: 'Monday, 20 December 2021',
    author: 'Admin',
    comments: 12,
    views: 45,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus...',
    image: 'images/post1.webp',
  },
  {
    id: 2,
    title: 'Innovations in Modern Healthcare',
    date: 'Tuesday, 21 December 2021',
    author: 'Admin',
    comments: 8,
    views: 60,
    excerpt:
      'Suspendisse potenti. Nulla facilisi. Donec at eros non velit sollicitudin viverra...',
    image: 'images/post2.jpg',
  },
  {
    id: 3,
    title: 'Improving Patient Care with Technology',
    date: 'Wednesday, 22 December 2021',
    author: 'Admin',
    comments: 15,
    views: 75,
    excerpt:
      'Curabitur convallis, metus nec placerat pretium, augue nulla sollicitudin elit...',
    image: 'images/post3.jpg',
  },
  {
    id: 4,
    title: 'Steps Towards a Healthier Future',
    date: 'Thursday, 23 December 2021',
    author: 'Admin',
    comments: 10,
    views: 50,
    excerpt:
      'Nam at quam vehicula, hendrerit erat a, volutpat mi. Vivamus ut ligula vel magna...',
    image: 'images/post4.jpg',
  },
];

const BlogCard = ({ post }) => (
  <div className="mb-10 border-b pb-6">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-auto rounded-md shadow"
    />
    <div className="text-sm text-gray-500 mt-3 flex flex-wrap gap-4">
      <span>
        <FaCalendarAlt className="inline mr-1" /> {post.date}
      </span>
      <span>
        <FaUser className="inline mr-1" /> {post.author}
      </span>
      <span>
        <FaComment className="inline mr-1" /> {post.comments}
      </span>
      <span>
        <FaEye className="inline mr-1" /> {post.views}
      </span>
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mt-3">
      {post.title}
    </h3>
    <p className="text-gray-700 mt-2">{post.excerpt}</p>
    <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      <Link to={`/news/${post.id}`}>Read More</Link>
    </button>
  </div>
);

const Sidebar = () => (
  <div className="space-y-8">
    {/* Search */}
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border rounded shadow-sm"
      />
    </div>

    {/* Recent Posts */}
    <div>
      <h4 className="text-lg font-bold text-blue-900 mb-3">
        Recent Posts
      </h4>
      <ul className="space-y-3 text-sm text-gray-800">
        {posts.slice(0, 4).map(post => (
          <li
            key={post.id}
            className="flex gap-3 border-b pb-2 items-start"
          >
            <img
              src={post.image}
              alt="thumb"
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <p className="text-blue-700 text-xs">{post.date}</p>
              <p>
                {post.title.length > 40
                  ? post.title.slice(0, 40) + "..."
                  : post.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Categories */}
    <div>
      <h4 className="text-lg font-bold text-blue-900 mb-3">
        Categories
      </h4>
      <ul className="text-sm text-gray-800 space-y-2">
        <li className="flex justify-between">
          Surgery <span className="text-blue-700">3</span>
        </li>
        <li className="flex justify-between">
          Health Care <span className="text-blue-700">6</span>
        </li>
        <li className="flex justify-between">
          Medicine <span className="text-blue-700">4</span>
        </li>
        <li className="flex justify-between">
          Professional <span className="text-blue-700">10</span>
        </li>
      </ul>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="bg-white font-sans">
    {/* Hero Section */}
    <div className="relative bg-blue-50 text-center py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(images/header.webp)' }}
      ></div>
      <div className="relative z-10">
        <p className="text-sm text-blue-800">Home / News</p>
        <h2 className="text-4xl font-bold text-blue-900 mt-2">
          Latest News
        </h2>
      </div>
    </div>

    {/* Content Section */}
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Blog Cards */}
      <div className="md:col-span-2">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  </div>
);

export default BlogPage;
