import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header_inner_service from "./Header_inner_service";
import InfoIcon from '@material-ui/icons/Info';

function Dashboard_service() {
  const { profession } = useParams();
  localStorage.setItem("Profession", profession);
  const [registrationList, setregistartionList] = useState([]);
  useEffect(() => {

    async function getData() {
      const res = await Axios.get(`http://localhost:3001/api/dashboard/service/get/${profession}`);
      console.log(res.data);
      setregistartionList(res.data);

    };
    getData();

  }, []);


  const deleteId = (Id) => {


    Axios.delete(`http://localhost:3001/api/delete/${Id}`);

  };

  // const ViewId=(Id)=>{

  //     Axios.get(`http://localhost:3001/api/vi/${Id}`);
  // };




  return (
    <div>
      <Header_inner_service Expert={profession} />
      <table class="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Problem</th>
            <th scope="col">Mobile no</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {registrationList.map((val, index) => {

            return (

              <tr>
                <th scope="row">{val.ProblemId}</th>
                <td>{val.Username}</td>
                <td>{val.Problem}</td>
                <td>{val.Mobile}</td>
                <td>{val.Location}</td>
                <td>
                  <Link class="btn btn-outline-primary rounded-pill" to={`/dashboard_service/view/${val.ProblemId}`}><InfoIcon/></Link>
                  {/* <Link class="btn btn-outline-primary" >Edit</Link>
                        <Link class="btn btn-outline-danger" onClick={()=>{deleteId(val.ProblemId)}}>Delete</Link> */}

                </td>
              </tr>


            );
          })}
                <tr>
          </tr>

        </tbody>
      </table>




    </div>



  )
}

export default Dashboard_service;