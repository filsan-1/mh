import React from "react";
import Journal from "./Journal";
import MoodTracker from "./MoodTracker";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Journal />
      <MoodTracker />
    </div>
  );
}

export default Dashboard;