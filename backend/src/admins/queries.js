const checkEmailExistsQuery = "SELECT * FROM admindetails WHERE email = $1;";
const addEmailForVerificationQuery = "INSERT INTO adminVerification (EmailID, OTP) VALUES ($1, $2) RETURNING *;";
const getDetailsForVerificationQuery = 'SELECT emailid, otp FROM adminverification WHERE emailid = $1;';
const addEmailIfSuccessfulQuery = 'INSERT INTO admindetails (EmailID, Password) VALUES ($1, $2);';
const deleteEmailIfOTPUnsuccessfulQuery = 'DELETE FROM adminverification WHERE emailid = $1;';

module.exports = {
    checkEmailExistsQuery,
    addEmailForVerificationQuery,
    getDetailsForVerificationQuery,
    addEmailIfSuccessfulQuery,
    deleteEmailIfOTPUnsuccessfulQuery
};
