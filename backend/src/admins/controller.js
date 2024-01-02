const admin=require('../../db');
const queries=require('./queries')
const checkEmailExists = async (email) => {
    try {
        const results = await admin.query(queries.checkEmailExists, [email]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const addAdmin=async (email,password)=>{
    try{
        const results=await admin.query(queries.addAdmin,[email,password]);
        console.log("Admin added successfully ",results);
    }catch(error){
        console.log("error adding admin ",error);
    }
}
module.exports={
    checkEmailExists,
    addAdmin,
}