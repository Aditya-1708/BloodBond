const nodemailer=require('nodemailer');
const {EMAIL,PASSWORD}=require('../../env');
const Mailgen = require('mailgen');
const Mail = require('nodemailer/lib/mailer');
const adminController=require('../../src/admins/controller');
const userController=require('../../src/users/controller');

async function genOTP() {
    try {
        return Math.floor(900000 * Math.random()) + 100000;
    } catch (error) {
        throw error;
    }
}


const sendOTP = async (req, res) => {
    try {
        const {userEmail,role} = req.body;
        const bool =role?(await adminController.checkEmailExists(userEmail)).length:(await userController.checkEmailExists(userEmail)).length;
        if (bool > 0) {
            res.status(403).json({ message: "Already exists, please sign in." });
        } else {
            let OTP = await genOTP();
            await adminController.addEmailForVerification(userEmail,OTP);
            let config = {
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD,
                },
            };

            let transporter = nodemailer.createTransport(config);
            let MailGenerator = new Mailgen({
                theme: "default",
                product: {
                    name: "Mailgen",
                    link: "https://mailgen.js/",
                },
            });

            let response = {
                body: {
                    name: "BLOODBOND",
                    intro: "WELCOME TO BLOODBOND your OTP is " + OTP,
                    outro: "",
                },
            };

            let mail = MailGenerator.generate(response);

            let message = {
                from: EMAIL,
                to: userEmail,
                subject: "BloodBond One Time Pass",
                html: mail,
            };

            await transporter.sendMail(message);

            res.status(200).json({ message: "OTP sent successfully." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports={
    sendOTP,
}