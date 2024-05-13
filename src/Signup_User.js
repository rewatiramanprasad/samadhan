import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import{Loginuser} from './context';

function Signup_User() {
   // const [useremail,Setuseremail] = useContext(Loginuser);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [loginemail,setLoginemail]=useState('');
    const [loginpassword,setLoginpassword]=useState('');
    const[status,setStatus]=useState('Hello! User');
    const submitLogin=()=>{
        Axios.post('http://localhost:3001/api/user/login',{
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
                        window.location=`/dashboard/${response.data[0].email}`;
                    }
            
        });
        };



    const submitRegistration=()=>{
        Axios.post('http://localhost:3001/api/user/insert',{
            Email:email,
            Password:password,
            Name:name,
            Mobile:mobile,
            Location:location,
            
        
        }).then((response)=>{
            console.log(response.data);
            if(response.data.affectedRows==1){
                alert("secessfully Register");
            }
            else{
                setStatus(" Try again later!");
            }
            
        });
        };


    // const register = e => {
    //     e.preventDefault();
    //     //some fancy firebase login...
    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then(auth => {
    //         })
    //         .catch(event => alert(event.message))
    // }

    
    return(
        <div className="conatiner-fluid p-5 ">
            
            <div className="w-50 mx-auto shadow p-3 ">
               <h2 align="center"> {status}</h2>

                    <div class="d-inline-flex p-3 mx-auto ">

                        <div className="conatiner-fluid  w-100 p-2 border-right  border-5 border-dark text-white">
                            
                            <input type="email" placeholder="Email or Username" className="form-control form-control-lg mb-1 input" onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="text" placeholder="Password" className="form-control form-control-lg mb-1 input " onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="text" placeholder="Name" className="form-control form-control-lg  mb-1 input " onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" placeholder="Mobile" className="form-control form-control-lg mb-1 input " onChange={(e) => { setMobile(e.target.value) }} />
                            <input type="text" placeholder="Location" className="form-control form-control-lg mb-1 input " onChange={(e) => { setLocation(e.target.value) }} />
                            
                            <button onClick={submitRegistration} type="submit" className="form-control form-control-lg shadow mb-3 rounded-pill tex" > Join Samadhan</button>
                        </div>
                        <div className="container-fluid border-dark border-5 border-left ">
                            <div class="mt-5 pt-5 ">
                            
                            <input type="email" placeholder="Email or Username" className="form-control form-control-lg mb-2 input" onChange={(e) => { setLoginemail(e.target.value) }} />
                            <input type="text" placeholder="Password" className="form-control form-control-lg mb-2 input" onChange={(e) => { setLoginpassword(e.target.value) }} />
                            <button className="form-control form-control-lg shadow rounded-pill mb-4 tex" onClick={submitLogin} >Login</button>
                            </div>
                        </div>


                    </div>
                    
                </div>
            </div>

        
    );
}

export default Signup_User;
