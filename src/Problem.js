import React, { useState, useEffect } from "react";
import './Problem.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import {useParams } from 'react-router-dom';
import Header_inner from "./Header_inner";
function Problem() {
    const { email } = useParams();
   // const [username, setUsername] = useState('');
    const [problem, setProblem] = useState('');
    const [mobile, setMobile] = useState('');
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');

    const [status, setStatus] = useState('');
    const [problemid, setProblemId] = useState(null);
    //setProblemId(null);


    // useEffect(()=>{
    //     Axios.get('http://localhost:3001/api/get').then((response) => {
    //         setregistartionList(response.data);
    //     });

    //   })
    const submitReview = () => {
        Axios.post('http://localhost:3001/api/problem/insert', {

            Username: email,
            Problem: problem,
            Mobile: mobile,
            Profession: profession,
            Location: location,
            Status: status,
            ProblemId: problemid,

        }).then((response) => {
            console.log(response.data);
            if (response.data.affectedRows == 1) {
                alert("sucessfully submited");
                window.location = `/dashboard/${email}`;
            }
            else {
                setStatus(" Try again later!");
            }
        });
    };
    return (




        <div className="container">
        <Header_inner email={email}/>

            <div className="w-75 mx-auto shadow p-5">

                <h2 className="text-center mb-4"> Add  Problem</h2>
                <form>

                    <div className="form-group">

                        <input type="text" value={email} placeholder="username" disabled className="form-control form-control-lg"  />

                        <select class="form-select" onChange={(e) => { setProfession(e.target.value) }} className="form-control form-control-lg" aria-label="Default select example">
                            <option selected>Select Category</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Technician">Technician</option>
                            <option value="Mechanics">Mechanics</option>
                            <option value="Painter">Painter</option>
                            <option value="Masons">Masons</option>
                            <option value="Builder">Builder</option>
                            <option value="Daily wagers worker">Daily wagers worker</option>
                        </select>
                        <textarea type="text" row="4" name="problem" placeholder="mention your Problem...." className="form-control form-control-lg" onChange={(e) => { setProblem(e.target.value) }} />

                        <input type="text" name="mobile" placeholder="Mobile" className="form-control form-control-lg" onChange={(e) => { setMobile(e.target.value) }} />


                        





                        {/* <input type="text" name="profession" placeholder="Category" className="form-control form-control-lg" onChange={(e) => { setProfession(e.target.value) }} /> */}


                        <input type="text" name="location" placeholder="Location" className="form-control form-control-lg" onChange={(e) => { setLocation(e.target.value) }} />


                        {/* <input type="text" name="problemId" placeholder="ProblemId" className="form-control form-control-lg" onChange={(e)=>{setProblemId(e.target.value)}}/> */}


                        <input type="text" name="status" disabled value=" notAssigned" className="form-control form-control-lg" onChange={(e) => { setStatus(e.target.value) }} />

                        <button className="form-control form-control-lg bg-orangered text-dark " onClick={submitReview}>Submit</button>

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

export default Problem;