import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";

const Active = () => {
  const [active, setActive] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4500/challenges/active")
      .then((res) => res.json())
      .then((data) => setActive(data))
      .catch((err) => console.log(err));
  }, []);

  const handleJoin = async (challengeId) => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    const res = await fetch(
      `http://localhost:4500/challenges/join/${challengeId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      }
    );

    if (res.ok) {
      alert("Challenge joined successfully!");
      navigate("/myActivities");
    } else {
      alert("Failed to join challenge");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Active Challenges
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {active.map((ch) => (
          <div
            key={ch._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
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

              <button
                onClick={() => handleJoin(ch._id)}
                className="btn bg-primary mt-3 w-full"
              >
                Active Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Active;
