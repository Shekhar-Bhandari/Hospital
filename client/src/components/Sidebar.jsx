import React from 'react';

const posts = [
  {
    id: 1,
    title: 'A passion for putting patients first',
    date: 'Monday, 06, September 2021',
    image: 'images/post1.webp',
  },
  {
    id: 2,
    title: 'This Article Title goes here, but not too long',
    date: 'Monday, 06, September 2021',
    image: 'images/post2.jpg',
  },
  {
    id: 3,
    title: 'This Article Title goes here, but not too long',
    date: 'Monday, 06, September 2021',
    image: 'images/post3.jpg',
  },
  {
    id: 4,
    title: 'This Article Title goes here, but not too long',
    date: 'Monday, 06, September 2021',
    image: 'images/poat5.avif',
  },
];

const Sidebar = () => {
  return (
    <aside className="space-y-10 pl-0 md:pl-5">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-bold text-blue-900 mb-4">Recent Posts</h4>
        <ul className="space-y-4 text-sm text-gray-800">
          {posts.map(post => (
            <li key={post.id} className="flex gap-3 border-b pb-2">
              <img
                src={post.image}
                alt="thumbnail"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div>
                <p className="text-blue-600 text-xs">{post.date}</p>
                <p className="font-medium">
                  {post.title.length > 40
                    ? post.title.slice(0, 40) + '...'
                    : post.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-lg font-bold text-blue-900 mb-4">Categories</h4>
        <ul className="text-sm text-gray-800 space-y-3">
          <li className="flex justify-between items-center">
            <span>Surgery</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">3</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Health Care</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">6</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Medical</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">4</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Professional</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">10</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
