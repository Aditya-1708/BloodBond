const db = require('../../db');
const queries = require('./queries');

const checkEmailExists = async (email) => {
    try {
        const results = await db.admins.query(queries.checkEmailExistsQuery, [email]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const addEmailForVerification = async (email, OTP) => {
    try {
        const results = await db.admins.query(queries.addEmailForVerificationQuery, [email, OTP]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const getDetailsForVerification = async (email) => {
    try {
        const results = await db.admins.query(queries.getDetailsForVerificationQuery, [email]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const deleteEmailIfOTPUnsuccessful = async (email) => {
    try {
        const results = await db.admins.query(queries.deleteEmailIfOTPUnsuccessfulQuery, [email]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const addEmailIfSuccessful = async (email, password) => {
    try {
        const results = await db.admins.query(queries.addEmailIfSuccessfulQuery, [email, password]);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

module.exports = {
    checkEmailExists,
    addEmailForVerification,
    getDetailsForVerification,
    deleteEmailIfOTPUnsuccessful,
    addEmailIfSuccessful
};
