import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./Navlinks";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const themes = {
  dracula: "dracula",
  light: "light",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { light, dracula } = themes;
    const newTheme = theme === light ? dracula : light;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const { numItemsInCart } = useSelector((state) => state.cartState);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <NavLink
            to="/"
            className=" btn lg:flex btn-primary text-3xl items-center"
          >
            <span className="italic font-bold">FN</span><small className="lowercase text-[15px] flex items-end h-full italic">furnitures</small>
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-success indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
