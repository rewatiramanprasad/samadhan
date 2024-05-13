import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Header_service_proposal(props) {
    return (
        




        <div className="header mx-5">
            <style>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
            </style>

            <div className="header__left">

                <h1 className="header__logo">sAmAdhAn</h1>

                {/* <h4>How It Works</h4>
                <h4>Browse Jobs</h4> */}
            </div>

            <div className="header__right">
            


                

                {/* <h4><Link className="btn btn-primary" to="/signup_user">ServiceProvider</Link></h4>
                <h4><Link className="btn btn-primary" to="/signup_Service">User</Link></h4> */}
                 {/* <h4><Link className=" btn btn-danger  " to={`/Problem/${props.email}`}> Post a Problem</Link></h4> */}
                 <h4><Link className="btn bg-orangered text-white" to={`/service/add_proposal`}>Add proposal</Link></h4>
                <h4><Link className="btn btn-primary" to={`/Dashboard/service/${props.Expert}`}> Dashboard</Link></h4>
                <h4><Link className="btn btn-outline fa fa-sign-out fa-2x" to={`/`}></Link></h4>

            </div> 

        </div >


    );
}

export default Header_service_proposal;
