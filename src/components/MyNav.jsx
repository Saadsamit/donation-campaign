import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
const MyNav = () => {
  const [state,setState] = useState(false)
  return (
    <div className="absolute top-0 left-0 right-0">
        <nav>
      <div className="flex flex-row justify-between container mx-auto py-4">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="hidden sm:flex justify-center items-center">
        <li className="px-4">
          <NavLink to="/" className="text-base font-bold">
            Home
          </NavLink>
        </li>
        <li className="px-4">
          <NavLink to="/donation" className="text-base font-bold">
            Donation
          </NavLink>
        </li>
        <li className="px-4">
          <NavLink to="/statistics" className="text-base font-bold">
            Statistics
          </NavLink>
        </li>
      </ul>
      <div className="flex sm:hidden justify-center items-center relative">
        <button className="text-3xl" onClick={()=> setState(!state)}>{state? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}</button>
        {state ? <ul className="flex flex-col items-center shadow-lg rounded-md bg-base-200 py-2 absolute top-14 right-4">
        <li className="px-4 py-1 hover:bg-base-300 rounded-md">
          <NavLink to="/" className="text-base font-bold">
            Home
          </NavLink>
        </li>
        <li className="px-4 py-1 hover:bg-base-300 rounded-md">
          <NavLink to="/donation" className="text-base font-bold">
            Donation
          </NavLink>
        </li>
        <li className="px-4 py-1 hover:bg-base-300 rounded-md">
          <NavLink to="/statistics" className="text-base font-bold">
            Statistics
          </NavLink>
        </li>
      </ul>: ""}
      </div>
      </div>
    </nav>
    </div>
  );
};

export default MyNav;
