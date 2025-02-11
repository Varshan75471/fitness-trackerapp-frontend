import { useEffect, useState } from "react";
import { getUserProfile, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import CSS styles


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        logout();
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <div className="dashboard">
      <h2 className="welcome-text">Welcome, {user ? user.name : "Loading..."}! 👋</h2>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3>Steps Taken</h3>
          <p>10,500</p>
        </div>
        <div className="stat-card">
          <h3>Calories Burned</h3>
          <p>850 kcal</p>
        </div>
        <div className="stat-card">
          <h3>Workout Time</h3>
          <p>45 mins</p>
        </div>
      </div>

      <div className="progress-container">
        <h3>Fitness Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
      </div>

      <button className="logout-btn" onClick={() => { logout(); navigate("/login"); }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
