import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="btn-info py-2 font-semibold text-black">
      <div className="align-elements justify-center flex sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
