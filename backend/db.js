const Pool=require('pg').Pool;

const users = new Pool({
    user: "postgres",
    host:"localhost",
    database:"users",
    password:"Aditya170804!",
    port:4200,
})
const admins=new Pool({
    user: "postgres",
    host:"localhost",
    database:"admins",
    password:"Aditya170804!",
    port:4200,
});
module.exports={
    users,
    admins,
};