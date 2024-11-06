import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end border border-b-2 border-b-black leading-10 mb-7 bg-slate-300 ">
      <ul className="flex space-x-4 my-4 mr-16 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="font-bold text-xl">Home</p>
        </NavLink>

        <NavLink to="/owner" className="flex flex-col items-center gap-1">
          <p className="font-bold text-xl">Owner</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
