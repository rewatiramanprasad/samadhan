import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Header_inner from "./Header_inner";

import Assigned from "./Assigned";



function View() {


  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {

    async function getData() {
      const res = await Axios.get(`http://localhost:3001/api/problem/view/${id}`);
      console.log(res.data[0].Username);
      setUser(res.data);
      setUsername(res.data[0].Username);
      setStatus(res.data[0].Status);



      //setUsername(res.data.Username);


    };
    getData();

  }, []);


  return (
    <div className="container">
      <Header_inner email={username} />
      {
        user.map((val, index) => {

          return (<div class="container shadow mx-auto p-5 border">




            <table class="table table-borderless align-middle mx-5 p-5 table-hover ">

              <div  >
                <span > <b>&nbsp;&nbsp;&nbsp;ProblemId:  {val.ProblemId}</b></span>

                <tr >

                  <td colSpan="10" align="left"><b>Status:</b>  {val.Status}</td>
                  <td colSpan="10" align="center"><b>Date:</b>  {val.Date}</td>

                </tr>
                <tr >

                  {/* <td colSpan="4" align="center" > &nbsp; hello</td> */}
                  <td colSpan="10" align="left" class="table-active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <b>Problem:</b> {val.Problem}</td>

                </tr>
                <tr>

                  <td colSpan="10" align="left"><b>Mobile:</b>  {val.Mobile}</td>
                  <td colSpan="10" align="center"><b>Location:</b>  {val.Location}</td>
                </tr>
              </div>


            </table>

          </div>
          );

        })
      }
      
    </div>

  );






}

export default View;