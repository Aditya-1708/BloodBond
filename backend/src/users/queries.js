const checkEmailExists = "SELECT * FROM userdetails WHERE email =$1;";
const addUser="INSERT INTO authentication (email, password) VALUES ($1, $2);"
module.exports={
    checkEmailExists,
    addUser,
}
