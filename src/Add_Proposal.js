import React, { useState, useEffect } from "react";
import './Problem.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import Header_inner_service from "./Header_inner_service";

function Add_Proposal() {
    const email = localStorage.getItem("email");
    const Id = localStorage.getItem("service_problem_id");
    const profession=localStorage.getItem("Profession");
    const [spemail, setSpemail] = useState('');
    const [problemid, setProblemId] = useState('');
    const [sprating, setSprating] = useState('');
    const [servicefee, setServicefee] = useState('');

    const [noofday, setNoofday] = useState('');

    const [user, setUser] = useState([]);

    useEffect(() => {

        async function getData() {
            const res = await Axios.get(`http://localhost:3001/api/add_proposal/get/${email}`);
            //console.log(res.data[0]);
            setUser(res.data[0]);

        };
        getData();

    }, []);

    const submitReview = () => {
        Axios.post('http://localhost:3001/api/add_proposal/insert', {

            Spemail: email,
            ProblemId: Id,
            Servicefee: servicefee,
            Sprating: user.rating,
            Noofday:noofday,


        }).then((response) => {
            console.log(response);
            if (response.data.affectedRows == 1) {
                alert("sucessfully submitted your proposal");
                window.location = `/dashboard/service/${user.profession}`;
            }
            else{
                alert(" Already Inserted!");
                window.location=`/dashboard_service/view/${Id}`;
            }
        });
    };
    return (





        <div className="">
            <Header_inner_service Expert={profession}/>


            <div className="w-50 mx-auto shadow p-5">

                <h2 className=" mb-4"> Add your Proposal</h2>
                <form>

                    <div className="form-group">
                        <input type="text" name="problemId" Value={Id} placeholder="ProblemId" disabled className="form-control form-control-lg mb-2" onChange={(e) => { setProblemId(Id) }} />

                        <input type="text" name="email" value={user.email} placeholder="username/email" disabled className="form-control form-control-lg mb-2" onChange={(e) => { setSpemail(user.email) }} />

                        <input type="number" placeholder="ServiceFee" className="form-control form-control-lg mb-2" onChange={(e) => { setServicefee(e.target.value) }} />
                        <input type="number" placeholder="no of working day" className="form-control form-control-lg mb-2" onChange={(e) => { setNoofday(e.target.value) }} />

                        <input type="text" name="Sprating" value={user.rating} placeholder="sprating" disabled className="form-control form-control-lg mb-4" onChange={(e) => { setSprating(user.rating) }} />

                        <button className="form-control form-control-lg bg-orangered rounded-pill" onClick={submitReview}>Submit</button>

                    </div>
                </form>
            </div>
        </div>

    );
}

export default Add_Proposal;