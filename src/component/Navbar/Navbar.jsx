import React from "react";
import "./navbar.scss";
import BallotIcon from "@mui/icons-material/Ballot";

const Navbar = () => {
  let user = true;
  return (
    <nav>
      <div className="left">
        <BallotIcon className="icn" />
      </div>
      {user ? (
        <div className="logdiv">
          <a href="/logout">Logout</a>
        </div>
      ) : (
        <div className="right">
          <a className="login" href="/login">
            Login
          </a>
          <a className="signup" href="/register">
            SignUp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
