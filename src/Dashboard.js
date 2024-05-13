import React,{useState,useEffect} from "react"; 
import './Problem.css';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Problem from "./Problem";
import Header_inner from "./Header_inner";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
function Dashboard (){
    const{email}=useParams();
    
    
    const [registrationList,setregistartionList]=useState([]);
    useEffect(() => {

        async function getData() {
          const res = await Axios.get(`http://localhost:3001/api/dashboard/get/${email}`);
          console.log(res.data);
          setregistartionList(res.data);
    
        };
        getData();
    
      }, []);


      const deleteId=(Id)=>{
          

        Axios.delete(`http://localhost:3001/api/delete/${Id}`);
        window.location=`/dashboard/${email}`;
        
    
    };

    // const ViewId=(Id)=>{

    //     Axios.get(`http://localhost:3001/api/vi/${Id}`);
    // };




      return(
          <div>
            <div>
            <Header_inner email={email}/>
            </div>
            
            <table class="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#ProblemId</th>
                        <th scope="col">Username</th>
                        <th scope="col">Category</th>
                        <th scope="col" align="center">Problem</th>
                        <th scope="col">Status</th>
                        <th scope="col" align="center">Action</th>
                    </tr>
                </thead>
            <tbody>
                
    {registrationList.map((val,index)=>{
        
                  return (
                  
                    <tr>
                    <th scope="row">{val.ProblemId}</th>
                        <td>{val.Username}</td>
                        <td>{val.Profession}</td>
                        <td>{val.Problem}</td>
                        <td>{val.Status}</td>
                        <td>
                        <Link class="btn btn-outline-dark mr-2"  to={`/problem/view/${val.ProblemId}`}><InfoIcon/></Link>
                        <Link class="btn btn-outline-primary" ><EditIcon fontSize="medium"/></Link> 
                        <Link class="btn btn-outline-danger ml-2" onClick={()=>{deleteId(val.ProblemId)}}><DeleteForeverIcon/></Link> 

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

export default Dashboard;