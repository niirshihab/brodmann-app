import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
      </header>
      <section className="dashboard-content">
        <div className="card">
          <h2>My Tasks</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
        </div>
        <div className="card">
          <h2>Notifications</h2>
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
          </ul>
        </div>
        <div className="card">
          <h2>Messages</h2>
          <ul>
            <li>Message 1</li>
            <li>Message 2</li>
            <li>Message 3</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;