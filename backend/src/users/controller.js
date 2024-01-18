const db=require('../../db');
const queries=require('./queries')
const checkEmailExists = async (email) => {
    try {
        const results=await db.users.query(queries.checkEmailExists,[email]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const addUser=async (email,password)=>{
    try{
        const results=await db.users.query(queries.addAdmin,[email,password]);
        console.log("Users added successfully ",results);
    }catch(error){
        console.log("error adding user ",error);
    }
}
module.exports={
    checkEmailExists,
    addUser,
}