import React, { useState } from 'react';
import './Signup.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

function Signup_Service() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [profession, setProfession] = useState('');
    const [experience, setExperience] = useState('');
    // const [rating, setRating] = useState('0');
    const [loginemail,setLoginemail]=useState('');
    const [loginpassword,setLoginpassword]=useState('');
    const [status,setStatus]=useState('hello! Service Provider');
    const submitLogin=()=>{
        Axios.post('http://localhost:3001/api/service/login',{
            Email:loginemail,
            Password:loginpassword,
            }).then((response)=>{
                if(response.data.message){
                console.log(response.data.message);
                setStatus(response.data.message);
                }
                else{
                    console.log(response.data);
                    setStatus("welcome! "+response.data[0].name);
                    localStorage.setItem("email",loginemail);
                    window.location=`/dashboard/service/${response.data[0].profession}`;
                }
            
        });
        };
    const submitRegistration = () => {
        Axios.post('http://localhost:3001/api/service/insert', {
            Email: email,
            Password: password,
            Name: name,
            Mobile: mobile,
            Profession: profession,
            Location: location,
            Experience: experience,
            Rating:'0',

        }).then((response) => {
           //console.log(response.data);
            if(response.data.affectedRows==1){
                alert("successfully Register");
            }
            else{
                setStatus(" Try again later!");
            }
        });
    };


    return (
        <div className="conatiner-fluid shadow p-5 ">
            
            <div className="w-50 mx-auto shadow p-3 ">
               <h2 align="center"> {status}</h2>

                    <div class="d-inline-flex p-3 mx-auto ">

                        <div className="conatiner-fluid  w-100 p-2 border-right  border-5 border-dark text-white">
                            
                            <input type="email" placeholder="Email or Username" className="form-control form-control-lg mb-1 input" onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="text" placeholder="Password" className="form-control form-control-lg mb-1 input " onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="text" placeholder="Name" className="form-control form-control-lg  mb-1 input " onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" placeholder="Mobile" className="form-control form-control-lg mb-1 input " onChange={(e) => { setMobile(e.target.value) }} />
                            <input type="text" placeholder="Location" className="form-control form-control-lg mb-1 input " onChange={(e) => { setLocation(e.target.value) }} />
                            {/* <input type="text" placeholder="Profession" className="form-control form-control-lg mb-1 input" onChange={(e) => { setProfession(e.target.value) }} /> */}
                            <select class="form-select" onChange={(e) => { setProfession(e.target.value) }} className="form-control form-control-lg mb-1 input" aria-label="Default select example">
                            <option selected>Select Category</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Technician">Technician</option>
                            <option value="Mechanics">Mechanics</option>
                            <option value="Painter">Painter</option>
                            <option value="Masons">Masons</option>
                            <option value="Builder">Builder</option>
                            <option value="Daily wagers worker">Daily wagers worker</option>
                        </select>

                        <select class="form-select" onChange={(e) => { setExperience(e.target.value) }} className="form-control form-control-lg mb-1 input" aria-label="Default select example">
                            <option selected>Select Experience</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Advance">Advance</option>
                            <option value="Expert">Expert</option>
                        </select>
                            {/* <input type="text" placeholder="Experience" className="form-control form-control-lg mb-1 input" onChange={(e) => { setExperience(e.target.value) }} /> */}
                            {/* <input type="text" placeholder="Rating" className="form-control form-control-lg mb-1 input" onChange={(e) => { setRating(e.target.value) }} /> */}
                            <select class="form-select" disabled onChange={(e) => { setProfession('0') }} className="form-control form-control-lg mb-1 input" aria-label="Default select example">
                            <option selected>Select Rating</option>
                            <option value="0" >0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="0"></option>
                        </select>
                            <button onClick={submitRegistration} type="submit" className="form-control form-control-lg shadow-lg  mb-3 rounded-pill op tex " href="/login"> Join Samadhan</button>
                        </div>
                        <div className="container-fluid border-dark border-5 border-left ">
                            <div class="mt-5 pt-5 ">
                            
                            <input type="email" placeholder="Email or Username" className="form-control form-control-lg mb-2 input" onChange={(e) => { setLoginemail(e.target.value) }} />
                            <input type="text" placeholder="Password" className="form-control form-control-lg mb-2 input" onChange={(e) => { setLoginpassword(e.target.value) }} />
                            <button className="form-control form-control-lg   op shadow-lg  rounded-pill mb-4 tex" onClick={submitLogin} >Login</button>
                            </div>
                        </div>
                        


                    </div>
                    {/* <div class=" d-inline-flex p-2 op text-white">



</div> */}
                </div>
            </div>

        

    );

}

export default Signup_Service;
