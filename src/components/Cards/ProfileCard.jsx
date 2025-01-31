import React from "react";
const ProfileCard = () => {
  return (
    <div style={styles.body}>
      <div className="profile-card" style={styles.profileCard}>
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile picture of a person with short brown hair, wearing a suit and tie"
          style={styles.profileImage}
        />
        <h2 style={styles.name}>Manoj Sarkar</h2>
        <p style={styles.username}>Manoj Sarkar</p>
        <hr style={styles.divider} />
        <a href="#" style={styles.link}>
          <i className="fas fa-user" style={styles.icon}></i>
          My Profile
        </a>
        <a href="#" style={styles.link}>
          <i className="fas fa-sign-out-alt" style={styles.icon}></i>
          Sign Out
        </a>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "250px",
    padding: "20px",
    textAlign: "left",
  },
  profileImage: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    float: "left",
    marginRight: "10px",
  },
  name: {
    fontSize: "14px",
    margin: 0,
    color: "#333",
    fontWeight: 500,
  },
  username: {
    fontSize: "12px",
    color: "#666",
    margin: 0,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e0e0e0",
    margin: "20px 0",
  },
  link: {
    display: "block",
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
    margin: "10px 0",
  },
  icon: {
    marginRight: "8px",
  },
};

export default ProfileCard;
