import React from 'react';
import { useNavigate } from 'react-router';

const handleJoinChallenge = async (challengeId) => {
    const navigate = useNavigate()
  const email = localStorage.getItem("userEmail"); 
  if (!email) {
    navigate("/auth/login");
    return;
  }

  const res = await fetch(`http://localhost:4500/challenges/join/${challengeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  if (res.ok) {
    alert("Challenge joined successfully!");
  } else {
    alert(data.error || "Failed to join challenge");
  }
};


export default handleJoinChallenge;