import { useState } from "react";

const Admin = ({ data, onAddUser, onDeleteUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    if (name && lastName && position) {
      const newUser = { name, lastName, position };
      onAddUser(newUser);
      setName("");
      setLastName("");
      setPosition("");
    }
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <h1 className="font-bold">Create User Here</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="p-2 m-4  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="p-2 m-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          className="p-2 m-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSave}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
      <div>
        <table className="w-full border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">LastName</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {data.map((user, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-3 px-6 text-center">{user.name}</td>
                <td className="py-3 px-6 text-center">{user.lastName}</td>
                <td className="py-3 px-6 text-center">{user.position}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => onDeleteUser(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
