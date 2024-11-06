const User = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 ">Name</th>
            <th className="py-3 px-6 ">Last Name</th>
            <th className="py-3 px-6 ">Position</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
