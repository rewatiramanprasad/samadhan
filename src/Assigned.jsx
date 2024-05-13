import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';



function Assigned() {


 const { id } = useParams();
 console.log(id);
  


  const [user, setUser] = useState([]);
 // const [username, setUsername] = useState('');
  // const [Expert, setExpert] = useState(props.Status);
  // console.log(Expert);
  // console.log(props.Status);
  const [use,setUse]=useState('');

  useEffect(() => {

    async function getData() {
      const res = await Axios.get(`http://localhost:3001/api/assigned/get/${id}`);
     if(res){
      console.log(res);
      setUser(res.data[0]);
      }
      else{
      //setUse('not assigned yet');
      console.log(res);
      }
    };
    getData();

  }, []);


  return (
    <div className="container">
     
      <div class="container shadow mx-auto p-5 border">
            

           <h4>Details of Service Provider:</h4>
        
            <table class="table table-borderless align-middle mx-5 p-5 table-hover ">
              
                <div  >
                 {/* <span > <b>&nbsp;&nbsp;&nbsp;ProblemId:  {val.ProblemId}</b></span> */}
                    <tr class="table-active" >

                    
                      <td colSpan="5"  align="left"><b>{user.name}</b>  {}</td>
                      <td colSpan="5" align="center"><b>{user.mobile}</b>  {}</td>
                      <td colSpan="5" align="center"><b>{user.email}</b>  {}</td>
                      <td colSpan="5" align="center"><b>{user.profession}</b>  {}</td>
                    </tr>
                    {/* <tr >

                       <td colSpan="4" align="center" > &nbsp; hello</td> 
                      <td colSpan="10" align="left" class="table-active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Problem:</b> {}</td>

                    </tr>
                    <tr>

                      <td colSpan="10" align="left"><b>{user.mobile}</b>  </td>
                      <td colSpan="10" align="center"><b>{user.location}</b> </td>
                    </tr> */}
                  </div>
                
              
            </table>

            

          </div>
          














    </div>

  );






}

export default Assigned;