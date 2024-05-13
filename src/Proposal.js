import React, { useState, useEffect } from "react";
import './Proposal.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  Rating } from "@material-ui/lab";


function Proposal() {
    

    const { id } = useParams();
    const [proposal, setProposal] = useState([]);
    useEffect(() => {

        async function getData() {
            const res = await Axios.get(`http://localhost:3001/api/user/dashboard/problem/proposal/get/${id}`);
            console.log(res.data);
            setProposal(res.data);

        };
        getData();

    }, []);

    const Assigned=(spemail,id)=>{
        Axios.post('http://localhost:3001/api/assigned/insert',{
            
            Spemail:spemail,
            ProblemId:id
        
        }).then((response)=>{
            console.log(response.data);
                    if(response.data.affectedRows==1){

                        Axios.put('http://localhost:3001/api/assigned/update',{

                            ProblemId:id,
                            Spemail:spemail,
                        }).then((response)=>{
                            console.log(response.data);
                    if(response.data.affectedRows==1){
                        alert("update sucessfully ");
                        window.location=`/problem/view/${id}`;

                    }
                        });

                        alert(" Service provider sucessfully Assigned \n thanks for using samadhan");
                
                        
                    }
                    else{
                        alert(" Service Provider already Assigned");
                        window.location="/";
                    }
        });
        };
        




    return (
        

        <div class="container text-white ">
           
            <h2 class="text-dark" align="center">Service Provider Proposal
            

           


                       
                        {/* <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span> */}
            
            </h2>







            {proposal.map((val, index) => {



                return (


                    <div class="row bg-primary mb-3 rounded-pill p-2 mx-auto" >
                        <div class="col w-20" align="center">{val.spemail}</div>
                        <div class="col">Rs:{val.servicefee}</div>
                        <div class="col mt-2"><Rating name="size-large" defaultValue={val.sprating} size="large" readOnly/></div>
                        <div class="col">No of day:{val.noofday}</div> 
                        <div class="col"><Link class="btn btn-dark" onClick={()=>{Assigned(val.spemail,id)}}>choose your provider</Link></div>
                    </div>





                );

            })};



        </div>




    );
}

export default Proposal;