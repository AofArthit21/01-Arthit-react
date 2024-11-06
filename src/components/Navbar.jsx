import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end border leading-10 mb-7">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/owner" className="flex flex-col items-center gap-1">
            <p>Owner</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
