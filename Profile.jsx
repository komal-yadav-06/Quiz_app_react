import React from "react";
import "./Profile.css";

function Profile() {
  const userName = localStorage.getItem("userName") || "Guest";
  const userScore = localStorage.getItem("userScore") || "0";

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p><b>Name:</b> {userName}</p>
      <p><b>Score:</b> {userScore} points</p>
    </div>
  );
}

export default Profile;