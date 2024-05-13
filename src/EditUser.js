        import React,{useState,useEffect} from "react"; 
        import './Problem.css';
        import'../node_modules/bootstrap/dist/css/bootstrap.css';
        import Axios from 'axios';
        import {Link} from 'react-router-dom';
        import { Edit } from "@material-ui/icons";
        import { render } from "@testing-library/react";
        import {useHistory,useParams} from "react-router-dom";
import axios from "axios";
        function EditUser(){
        const {ProblemId}=useParams();
        
        const [username,setUsername]=useState('');
        const [problem,setProblem]=useState('');
        const [mobile,setMobile]=useState('');
        const [profession,setProfession]=useState('');
        const [location,setLocation]=useState('');
        
        const [status, setStatus] = useState('');
        const [problemid, setProblemId] = useState('');
        const [registrationList,setregistartionList]=useState([])
        
        useEffect(()=>{
            loadUser();

        
          },[])
        const submitReview=()=>{
        Axios.post('http://localhost:3001/api/insert',{
            
            Username:username,
            Problem:problem,
            Mobile:mobile,
            Profession:profession,
            Location:location,
            Status:status,
            ProblemId:problemid,
        
        }).then(()=>{
        
        });
        };

        const loadUser=async()=>{
            const result=await axios.get(`http://localhost:3001/api/get/user/${ProblemId}`);
            console.log(result);
        }
            return (
        
        
        
        
                <div className="container">
        
                    <div className="w-75 mx-auto shadow p-5">
        
                    <h2 className="text-center mb-4"> Add A Problem</h2>
                <form>
        
                    <div className="form-group">
        
                    <input type="text" name="username" placeholder="username" className="form-control form-control-lg" onChange={(e)=>{setUsername(e.target.value)}} />
        
                    <textarea type="text" row="4" name="problem" placeholder="mention your Problem...." className="form-control form-control-lg" onChange={(e)=>{setProblem(e.target.value)}}/>
                            
                    <input type="text" name="mobile" placeholder="Mobile" className="form-control form-control-lg" onChange={(e)=>{setMobile(e.target.value)}} />
        
        
                    <select class="form-select"  className="form-control form-control-lg" aria-label="Default select example">
                    <option selected>Select Category</option>
                    <option value="1">Electrician</option>
                    <option value="2">Painter</option>
                    <option value="3">Plumber</option>
                    </select>
        
        
        
        
                        
                    <input type="text" name="profession" placeholder="Category" className="form-control form-control-lg" onChange={(e)=>{setProfession(e.target.value)}} />
        
        
                    <input type="text" name="location" placeholder="Location" className="form-control form-control-lg" onChange={(e)=>{setLocation(e.target.value)}} />
        
        
                    <input type="text" name="problemId" placeholder="ProblemId" className="form-control form-control-lg" onChange={(e)=>{setProblemId(e.target.value)}}/>
        
        
                    <input type="text" name="status" value=" notAssigned" className="form-control form-control-lg" onChange={(e)=>{setStatus(e.target.value)}}/>
        
                    <button className="form-control form-control-lg op" onClick={submitReview}>Submit</button>
        
                    </div>
                </form>
                    </div>
                </div>
                // <div className="mb-5">
                //     <label  class="form-label">Email address</label>
                //     <input type="text" className="form-control"  placeholder="name@example.com" />
                
                
                //     <label  className="form-label">Example textarea</label>
                //     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                // </div>
        
                // <div className="App">
                //     <h1>POST YOUR PROBLEM</h1>
        
                //     <div className="form">
                        
                        
                //         <input type="text" name="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} />
                        
                        
                //         <input type="textarea" name="problem" placeholder="Problem" onChange={(e)=>{setProblem(e.target.value)}} />
                        
                
        
                //         <button onClick={submitReview}>Submit</button>
                        
                //         </div>
                //     </div>
            );
        }
        
        export default EditUser;



