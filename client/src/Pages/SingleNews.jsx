// // SinglePostPage.jsx

// import { useParams, Link } from 'react-router-dom';
// import { FaCalendarAlt, FaUser, FaComment, FaEye } from 'react-icons/fa';

// // Ideally, you would import posts from a central data file
// const posts = [
//  {
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
//     image: 'images/post4.jpg',
//   },
//   {
//     id: 5,
//     title: 'A passion for putting patients first',
//     date: 'Monday, 20, December 2021',
//     author: 'Admin',
//     comments: 12,
//     views: 45,
//     excerpt:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec...',
//     image: 'images/post5.jpg',
//   }
//   // more posts...
// ];

// const SingleNews = () => {
//   const { id } = useParams();
//   const post = posts.find(p => p.id.toString() === id);


//   if (!post) {
//     return <p className="text-center text-red-500 mt-10">Post not found.</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       {/* Hero */}
//       <div className="relative bg-blue-50 text-center py-12">
//         <h1 className="text-4xl font-bold text-blue-900">{post.title}</h1>
//         <div className="text-sm text-gray-500 mt-3 flex justify-center gap-4">
//           <span><FaCalendarAlt className="inline mr-1" /> {post.date}</span>
//           <span><FaUser className="inline mr-1" /> {post.author}</span>
//           <span><FaComment className="inline mr-1" /> {post.comments}</span>
//           <span><FaEye className="inline mr-1" /> {post.views}</span>
//           <span className="hidden md:inline"><FaEye className="inline mr-1" />{post.excerpt}</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="mt-10">
//         <img src={`/post${post.image}`} alt={post.title} className="w-full rounded-md mb-6" />
//         <p className="text-gray-700 leading-relaxed">
//           {post.content.repeat(5)} {/* simulate long content */}
//         </p>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-10">
//         <Link to="/post" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
//           ← Back to Blog
//         </Link>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Previous Article</button>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next Article</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleNews;



import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaComment, FaEye } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    title: 'A passion for putting patients first',
    date: 'Monday, 20 December 2021',
    author: 'Admin',
    comments: 12,
    views: 45,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam consequat purus, eu placerat libero fermentum nec. Nullam sed ipsum non odio fermentum malesuada. Vivamus vitae pretium mi. In hac habitasse platea dictumst. Mauris finibus, urna sed cursus vulputate, lectus nulla fermentum lorem, sed sollicitudin nisl libero eget nunc.',
    image: 'images/post1.webp',
  },
  {
    id: 2,
    title: 'Innovations in Modern Healthcare',
    date: 'Tuesday, 21 December 2021',
    author: 'Admin',
    comments: 8,
    views: 60,
    content:
      'Suspendisse potenti. Nulla facilisi. Donec at eros non velit sollicitudin viverra. Praesent eget tortor in elit dapibus placerat. Sed cursus, nisi ut suscipit molestie, magna magna fringilla purus, ut consequat erat urna nec erat.',
    image: 'images/post2.jpg',
  },
  {
    id: 3,
    title: 'Improving Patient Care with Technology',
    date: 'Wednesday, 22 December 2021',
    author: 'Admin',
    comments: 15,
    views: 75,
    content:
      'Curabitur convallis, metus nec placerat pretium, augue nulla sollicitudin elit, a bibendum velit nibh nec quam. Nam euismod, diam vel consequat placerat, nisi risus aliquam dolor, ut commodo nibh lorem eget erat.',
    image: 'images/post3.jpg',
  },
  {
    id: 4,
    title: 'Steps Towards a Healthier Future',
    date: 'Thursday, 23 December 2021',
    author: 'Admin',
    comments: 10,
    views: 50,
    content:
      'Nam at quam vehicula, hendrerit erat a, volutpat mi. Vivamus ut ligula vel magna blandit commodo. Phasellus sit amet eros vel risus ullamcorper eleifend. Donec viverra lacus in felis consequat, ac dapibus odio hendrerit.',
    image: 'images/post4.jpg',
  },
];

const SingleNews = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <p className="text-center text-red-500 mt-10">
        Post not found.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Hero Section */}
      <div className="relative bg-blue-50 text-center py-12">
        <h1 className="text-4xl font-bold text-blue-900">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 mt-3 flex justify-center gap-4">
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
      </div>

      {/* Content Section */}
      <div className="mt-10">
        <img
          src={`/${post.image}`}
          alt={post.title}
          className="w-full rounded-md mb-6"
        />
        <p className="text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <Link
          to="/news"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Blog
        </Link>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Previous Article
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Next Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;