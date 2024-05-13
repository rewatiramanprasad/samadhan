const{createPool}=require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"samadhan",
    connectionLimit:10
})
pool.query('select * from registration',(err,result,field)=>{

    if(err){
    return console.log(err);

    }
    return console.log(result);
})