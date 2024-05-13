const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app = express();
const mysql =require("mysql");
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"smadhan_new",

});



app.delete('/api/delete/:ProblemId',(req,res)=>{
    const problemId=req.params.ProblemId
    console.log(problemId)
    const sqlDelete = "DELETE FROM problem where ProblemId=? ;"
db.query(sqlDelete,problemId, (err,result)=>{
    if(err)console.log(err);

})
})

// app.post('/api/delete/:Id',(req,res)=>{
//     const problemId=req.params.Id
//     console.log(problemId)
//     const sqlDelete = "select * from problem ;"
// db.query(sqlDelete,problemId, (err,result)=>{
//     res.send(result)

// })
// })

// app.put('/api/update',(req,res)=>{

//    // const username=req.body.Username;
//     const problem=req.body.Problem;
//     const mobile=req.body.Mobile;
//     const profession=req.body.Profession;
//     const location=req.body.Location;
//    // const status="notassigned";
//     const problemid=req.body.ProblemId;
//    const sqlUpdate="UPDATE `problem` SET `Problem`=?,`Mobile`=?,`Profession`=?,`Location`=? WHERE `ProblemId`=? ";
//    db.query(sqlUpdate,[problem,mobile,profession,location,problemid],(err,result)=>{
//     if(err)console.log(err);      
// })
// })







app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
//user dashboard retrive data
app.get("/api/dashboard/get/:email",(req,res)=>{
    const Username=req.params.email;
    console.log(Username);
const sqlSelect = "select * from problem where Username=?";
db.query(sqlSelect,Username, (err,result)=>{
    console.log(err);
    console.log(result)
    res.send(result);

});

});
//service provider retrive data
app.get("/api/dashboard/service/get/:profession",(req,res)=>{
    const Profession=req.params.profession;
    console.log(Profession);
const sqlSelect = "select * from problem where Profession=? and Status='notassigned' ";
db.query(sqlSelect,Profession, (err,result)=>{
    console.log(err);
    console.log(result)
    res.send(result);

});

});








app.get("/api/user/dashboard/problem/proposal/get/:Id",(req,res)=>{
    const id=req.params.Id;
    console.log(id);
const sqlSelect = "select * from bidsolution where problemid=?";
db.query(sqlSelect,id, (err,result)=>{
    console.log(err);
    console.log(result)
    res.send(result);

});

});











// app.get('/api/get/user',(req,res)=>{
//     const ProblemId=req.params.ProblemId
//     console.log(Prob)
//     const sqlSelect = "select * from problem where ProblemId= ?";
//     db.query(sqlSelect,ProblemId, (err,result)=>{
//         res.send(result);
    
//     });

    
// });
//const pop=205;

app.get("/api/view/:Id",function(req,res){
    const id=req.params.Id;
    console.log(id)

   
    const sqlSelect = "select * from problem where ProblemId=? ";
    db.query(sqlSelect,id, (err,result)=>{
        console.log(result);
        res.send(result);
    //     app.get("/api/user/",(res,req)=>{
    //  res.res.send(result);
    //     });
    
    });
    
    });

app.get("/api/problem/view/:problemid",(req,res)=>{
    console.log(req.params.problemid);
    const id=req.params.problemid;
    const sqlSelect="select * from problem where ProblemId=?";
    db.query(sqlSelect,id,(err,result)=>{
        console.log(result);
        res.send(result);
    });
    
});


app.get("/api/proposal/view/:problemid",(req,res)=>{
    console.log(req.params.problemid);
    const id=req.params.problemid;
    const sqlSelect="select * from proposal where ProblemId=?";
    db.query(sqlSelect,id,(err,result)=>{
        console.log(result);
        res.send(result);
    });
    
});







//date
let ts = Date.now();

let date_ob = new Date(ts);
let date1 = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


//insert the problem of user
app.post("/api/problem/insert",(req,res)=>{
    
    const username=req.body.Username
    const problem=req.body.Problem
    const mobile=req.body.Mobile
    const profession=req.body.Profession
    const location=req.body.Location
    const status="notassigned"
    const problemid=req.body.ProblemId
    
    console.log(username)
    console.log(problem)
    console.log(mobile)
    console.log(profession)
    console.log(location)
    console.log(status)
    console.log(problemid)

const sqlInsert = "INSERT INTO problem (Date, Username, Problem, Mobile, Profession, Location, Status, ProblemId) VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
db.query(sqlInsert,[date1+"-"+month+"-"+year,username,problem,mobile,profession,location,status,problemid] , (err,result)=>{
    console.log(result);
    if(err){console.log({err:err});}
    if (result){res.send(result);}
    
});
});


// insert data of service provider
app.post("/api/service/insert",(req,res)=>{
    
    const email=req.body.Email
    const password=req.body.Password
    const name=req.body.Name
    const mobile=req.body.Mobile
    const profession=req.body.Profession
    const location=req.body.Location
    const experience=req.body.Experience
    const rating=req.body.Rating
    
    console.log(email)
    console.log(password)
    console.log(name)
    console.log(mobile)
    console.log(profession)
    console.log(location)
    console.log(experience)
    console.log(rating)

   

const sqlInsert2 = "INSERT INTO `userregistration` (`email`, `password`, `name`, `mobile`, `location`, `profession`, `experience`, `rating`) VALUES (?,?,?,?,?,?,?,?);"
db.query(sqlInsert2,[email,password,name,mobile,location,profession,experience,rating] , (err,result)=>{
    if(err){console.log({err:err});}
    if (result){res.send(result);}

});
});


// insert data of user
app.post("/api/user/insert",(req,res)=>{
    
    const email=req.body.Email
    const password=req.body.Password
    const name=req.body.Name
    const mobile=req.body.Mobile
    const location=req.body.Location
    
    
    console.log(email)
    console.log(password)
    console.log(name)
    console.log(mobile)
    console.log(location)
    

   

const sqlInsert3 = "INSERT INTO `usertoregistration`(`name`, `email`, `mobile`, `location`, `password`) VALUES (?,?,?,?,?);"
db.query(sqlInsert3,[name,email,mobile,location,password] , (err,result)=>{
    if(err){console.log({err:err});}
    if (result){res.send(result);}

});
});

//  data assigned to assigned database
app.post("/api/assigned/insert",(req,res)=>{
    
    const spemail=req.body.Spemail
    const problemid=req.body.ProblemId
    
    console.log(spemail)
    console.log(problemid)
   
const sqlInsert3 = "INSERT INTO `assigned`(`problemId`, `spemail`) VALUES (?,?);"
db.query(sqlInsert3,[problemid,spemail] , (err,result)=>{
    if(err){console.log({err:err});
    res.send(err);
}
    if(result){res.send(result);
    console.log(result);}

});
});

 
//service provider login
app.post("/api/service/login",(req,res)=>{
    
    const email=req.body.Email
    const password=req.body.Password

    console.log(email)
    console.log(password)
   

const sqlInsert3 = "select * from userregistration where email=? and password=?;"
db.query(sqlInsert3,[email,password] , (err,result)=>{
    if(err){console.log({err:err});}
    if (result.length>0){res.send(result);}
    else{
        res.send({message:"Wrong username/password combination"});
    }

});
});


//user login
app.post("/api/user/login",(req,res)=>{
    
    const email=req.body.Email
    const password=req.body.Password

    console.log(email)
    console.log(password)
   

const sqlInsert3 = "select * from usertoregistration where email=? and password=?;"
db.query(sqlInsert3,[email,password] , (err,result)=>{
    if(err){console.log({err:err});}
    if (result.length>0){
        console.log(result);
        res.send(result);
    }
    else{
        res.send({message:"Wrong username/password combination"});
    }

});
});

// insert proposal of in bid solution
app.post("/api/add_proposal/insert",(req,res)=>{
    
    const spemail=req.body.Spemail
    const problemid=req.body.ProblemId
    const servicefee=req.body.Servicefee
    const sprating=req.body.Sprating
    const spemail_Id=spemail+"_"+problemid
    const noofday=req.body.Noofday
    console.log(spemail)
    console.log(problemid)
    console.log(servicefee)
    console.log(sprating)
    console.log(spemail_Id)
    console.log(noofday);
    
const sqlInsert3 = "INSERT INTO `bidsolution`(`spemail_Id`,`problemid`, `servicefee`, `spemail`, `sprating`,`noofday`) VALUES (?,?,?,?,?,?);"
db.query(sqlInsert3,[spemail_Id,problemid,servicefee,spemail,sprating,noofday] , (err,result)=>{
//     if(err){
//     //console.log({err:err});
//     console.log({err:err});
//    // res.send(err);
//     }
    if(err){console.log({err:err});
    res.send("already inserted");
    }

    if (result){res.send(result);}
    // else{
        
    //     console.log("already inserted");
    // }

});
});

//update problem status
app.put("/api/assigned/update",(req,res)=>{
    
    const problemid=req.body.ProblemId
    const Status=req.body.Spemail
    
    console.log(problemid)
    console.log(Status)
   
    
const sqlInsert3 = "UPDATE `problem` SET `Status` = ? WHERE `problem`.`ProblemId` = ?;"
db.query(sqlInsert3,[Status,problemid] , (err,result)=>{
    if(err){
    
    console.log(err);
    res.send(err);
    }

    if (result){console.log(result);
        res.send(result);}

});
});

//Assined data of service provider
app.get("/api/assigned/get/:Id",(req,res)=>{
    const id=req.params.Id;
    console.log(id);
const sqlSelect = "select * from userregistration where email=(SELECT Status FROM `problem` where problemid=?)";
db.query(sqlSelect,id, (err,result)=>{
    console.log(err);
    console.log(result);
    if(result.length>0){
    res.send(result);
    }
    // else{
    //     res.send("select your service provider");
    // }

});

});
//set data of service proposal in add proposal 
app.get("/api/add_proposal/get/:email",(req,res)=>{
    const Email=req.params.email;
    console.log(Email);
const sqlSelect = "select * from userregistration where email=?";
db.query(sqlSelect,Email, (err,result)=>{
    console.log(err);
    console.log(result);
    //if(result.length>0){
    res.send(result);
    //}
    // else{
    //     res.send("select your service provider");
    // }

});

});





app.get('/',(req,res)=>{res.send("Hello server")})
app.listen(3001,()=>{console.log("running on port 3001",)});

