import  { useState } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';

const News = () => {
         // Add inside your News component (ensure useState is imported)
const totalPages = 3; // Update to your actual total pages needed
const [activePage, setActivePage] = useState(0);
  const articles = [
    {
      date: "Monday 05, September 2021",
      author: "By Author",
      title: "This Article’s Title goes Here, but not too long.",
      views: 68,
      likes: 86,
      image: 'images/news1.avif'
    },
    {
      date: "Monday 05, September 2021",
      author: "By Author",
      title: "This Article’s Title goes Here, but not too long.",
      views: 68,
      likes: 86,
      image: 'images/news2.jpg'
    },
    {
      date: "Monday 05, September 2021",
      author: "By Author",
      title: "This Article’s Title goes Here, but not too long.",
      views: 68,
      likes: 86,
      image: 'images/news3.jpg'
    },
    {
      date: "Monday 05, September 2021",
      author: "By Author",
      title: "This Article’s Title goes Here, but not too long.",
      views: 68,
      likes: 86,
      image: 'images/news4.webp'
    }
  ];

  return (
    <section className="bg-[#f8fafd] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
          Better Information, Better Health
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a56] mb-12">
          News
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Left: Image */}
              <div className="w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right: Content */}
              <div className="w-2/3 p-6 text-left">
                <p className="text-sm text-blue-600 font-medium mb-1">
                  {article.date} | <span className="text-gray-600">{article.author}</span>
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {article.title}
                </h4>

                {/* Stats */}
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaEye className="text-blue-500" />
                    {article.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-pink-500" />
                    {article.likes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}


<div className="flex justify-center mt-10 gap-2">
  {Array.from({ length: totalPages }).map((_, idx) => (
    <span
      key={idx}
      onClick={() => setActivePage(idx)}
      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
        activePage === idx ? 'bg-[#1f2a56]' : 'bg-[#c4d9fc]'
      }`}
    ></span>
  ))}
</div>
      </div>
    </section>
  );
};

export default News;