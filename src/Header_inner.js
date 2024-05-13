import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//import logo from './logo2.svg';

function Header_inner(props) {
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





        <div className="header">
            <style>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
            </style>
            <div className="header__left">

                <h1 className="header__logo mx-auto">Samadhan</h1>

                {/* <h4>How It Works</h4>
                <h4>Browse Jobs</h4> */}
            </div>

            <div className="header__right">
            


                

                {/* <h4><Link className="btn btn-primary" to="/signup_user">ServiceProvider</Link></h4>
                <h4><Link className="btn btn-primary" to="/signup_Service">User</Link></h4> */}
                 <h4><Link className=" btn bg-orangered text-white  " to={`/Problem/${props.email}`}> Post a Problem</Link></h4>
                <h4><Link className="btn btn-primary" to={`/Dashboard/${props.email}`}> Dashboard</Link></h4>
                <h4><Link className="btn btn-outline fa fa-sign-out fa-2x" to={`/`}></Link></h4>
            </div> 

        </div >


    );
}

export default Header_inner;
