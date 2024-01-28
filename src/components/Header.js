import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useLocalStorage from "../utils/useLocalStorage";

const Header = () => {
  const navigate = useNavigate();

  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(() => {
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-56 hover:cursor-pointer" src={LOGO_URL} />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4 text-xl font-bold">
            {" "}
            <Link to="/cart">🛒 Cart ({cartItems.length})</Link>
          </li>

          <li>
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage();
                  setIsLoggedin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
