import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//import logo from './logo2.svg';

function Header_Outer() {
    return (
        //         <div className="headr">



        // <ul className="nav justify-content-end">
        //     <li><h1 className="header__logo header">SAmAdhAn</h1></li>
        // <li className="nav-item">
        //     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //   </li>
        //   <li className="nav-item">
        //     <a className="nav-link" href="#"></a>
        //   </li>
        //   <li className="nav-item">
        //     <a className="nav-link" href="#">Link</a>
        //   </li>
        //   <li className="nav-item">
        //     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //   </li>
        // </ul>
        // </div>





        <div className="header p-2">
            <div className="header__left">

                <h1 className="header__logo">SAmAdhAn</h1>

                <h4>How It Works</h4>
                <h4>Browse Jobs</h4>
            </div>

            <div className="header__right">
            


                

                <h4><Link className="btn btn-primary" to="/signup_Service">ServiceProvider</Link></h4>
                <h4><Link className="btn btn-primary " to="/signup_user">User</Link></h4>
                {/* <h4><Link className=" btn btn-danger  " to="/problem"> Post a Problem</Link></h4>
                <h4><Link className="btn btn-primary" to="/Dashboard"> Dashboard</Link></h4> */}
            </div>

        </div >


    );
}

export default Header_Outer;
