import React, { useEffect, useState } from "react";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4500/tips")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        🌱 Recent Eco Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border"
          >
            {/* top accent */}
            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>

            <div className="p-6 flex flex-col h-full">
              <span className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
                {tip.category}
              </span>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {tip.title}
              </h3>

              <p className="text-gray-600 text-sm flex-grow">
                {tip.content.slice(0, 120)}...
              </p>

              <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                <span>✍️ {tip.authorName}</span>
                <span>{new Date(tip.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-600 font-medium">
                  👍 {tip.upvotes}
                </span>
                <button className="text-sm px-4 py-1 rounded-full border border-bg-primary text-color-secondary hover:bg-primary hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
