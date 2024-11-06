import { useState } from "react";
import User from "../components/User";
import Admin from "../components/Admin";

const Home = () => {
  const [showComponent, setShowComponent] = useState(null);
  const [title, setTitle] = useState("React-Assessment");

  const [data, setData] = useState([
    { name: "Aof", lastName: "Ar", position: "Dev" },
  ]);

  const handleUserClick = () => {
    setShowComponent("user");
    setTitle("Home-User Sector");
  };

  const handleAdminClick = () => {
    setShowComponent("admin");
    setTitle("Admin-User Sector");
  };

  const handleAddUser = (newUser) => {
    setData([...data, newUser]);
  };

  const handleDeleteUser = (index) => {
    const deleteData = data.filter((_, i) => i !== index);
    setData(deleteData);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-bold text-2xl">Generation Thailand</div>
      <div className="font-bold text-2xl">{title}</div>
      <div className="w-[555px] flex justify-between">
        <button
          className="p-2 bg-slate-200 text-black font-bold rounded hover:bg-blue-600 transition"
          onClick={handleUserClick}
        >
          User Home Sector
        </button>
        <button
          className="p-2 bg-slate-200 text-b;ack font-bold rounded hover:bg-blue-600 transition"
          onClick={handleAdminClick}
        >
          Admin Home Sector
        </button>
      </div>

      <div className=" w-1/2 ">
        {showComponent === "user" && <User data={data} />}
        {showComponent === "admin" && (
          <Admin
            data={data}
            onAddUser={handleAddUser}
            onDeleteUser={handleDeleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
