import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const ChallengesCard = () => {
  const [challengesCard, setChallengesCard] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4500/challenges/active')
      .then(res => res.json())
      .then(data => setChallengesCard(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Active Challenges</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {challengesCard.slice(0, 6).map(ch => (
          <div key={ch._id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src={ch.imageUrl}
              alt={ch.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{ch.title}</h3>
              <p className="text-sm text-gray-500">{ch.category}</p>
              <p className="mt-2 text-gray-700">
                {ch.duration} days | {ch.impactMetric}
              </p>
                <NavLink to='/myActivities'>
                <button className="btn bg-primary mt-3 w-full">Active Challenge</button>
              </NavLink>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesCard;
