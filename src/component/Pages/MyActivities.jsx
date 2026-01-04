import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyActivities = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:4500/my-activities?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4500/my-activities/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        // UI থেকে remove
        setActivities((prev) => prev.filter((act) => act._id !== id));
        alert("Activity deleted successfully");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting activity");
    }
  };

  if (!user) return <p className="text-center mt-10">Please login first</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Activities</h2>

      {activities.length === 0 && <p>You have not joined any challenge yet.</p>}

      {activities.map((a) => (
        <div
          key={a._id}
          className="bg-white shadow rounded p-4 mb-3 flex flex-col md:flex-row md:justify-between items-start md:items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">
              Challenge ID: {a.challengeId}
            </h3>
            <p>Status: {a.status}</p>
            <p>Progress: {a.progress}%</p>
            <p>Joined: {new Date(a.joinDate).toLocaleDateString()}</p>
          </div>

          <button
            onClick={() => handleDelete(a._id)}
            className="btn bg-primary mt-3 md:mt-0"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyActivities;
