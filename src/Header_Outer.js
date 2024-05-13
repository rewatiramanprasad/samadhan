import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";



function Header_Outer() {
  return (
    <div className="header p-2">
      <div className="header__left">
        <h1 className="header__logo">Samadhan</h1>

        <h4>How It Works</h4>
        <h4>Browse Jobs</h4>
      </div>

      <div className="header__right">
        <h4>
          <Link className="btn btn-primary" to="/signup_Service">
            ServiceProvider
          </Link>
        </h4>
        <h4>
          <Link className="btn btn-primary " to="/signup_user">
            User
          </Link>
        </h4>
        {/* <h4><Link className=" btn btn-danger  " to="/problem"> Post a Problem</Link></h4>
                <h4><Link className="btn btn-primary" to="/Dashboard"> Dashboard</Link></h4> */}
      </div>
    </div>
  );
}

export default Header_Outer;
