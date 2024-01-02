const checkEmailExists = "SELECT * FROM admins WHERE email = $1";
const addAdmin="INSERT INTO authentication (email, password) VALUES ($1, $2);"
module.exports={
    checkEmailExists,
    addAdmin,
}
