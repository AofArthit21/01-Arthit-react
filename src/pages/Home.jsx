import { useState } from "react";
import User from "../components/User";
import Admin from "../components/Admin";

const Home = () => {
  const [showComponent, setShowComponent] = useState(null);
  const [title, setTitle] = useState("React-Assessment");

  const handleUserClick = () => {
    setShowComponent("user");
    setTitle("Home-User Sector");
  };

  const handleAdminClick = () => {
    setShowComponent("admin");
    setTitle("Admin-User Sector");
  };

  return (
    <div>
      <div>{title}</div>
      <div>
        <button onClick={handleUserClick}>User Home Sector</button>
        <button onClick={handleAdminClick}>Admin Home Sector</button>
      </div>
      <div>
        {showComponent === "user" && <User />}{" "}
        {showComponent === "admin" && <Admin />}{" "}
      </div>
    </div>
  );
};

export default Home;
