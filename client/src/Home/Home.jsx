import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
        <h1 className={"milad"}>React - Socket.IO - Chat Application</h1>
      <input
        type="text"
        placeholder="Please Enter Your Room Number"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
        <div className="copyright-footer">
            <p>Developed by Milad Azad - Amjad Fayad - Muhammad Usama Nadeem</p> </div>
    </div>
  );
};

export default Home;
