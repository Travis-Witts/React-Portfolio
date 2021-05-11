const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    if (req.body.text.length() < 200 && req.body.from.length() < 200 && req.body.subject.length() < 200) {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EM_USER,
                pass: process.env.EM_PASS
            }
        });
    
        transporter.sendMail({
            from: req.body.from,
            to: 'travis.witts@outlook.com',
            subject: req.body.subject,
            text: req.body.text
        });
        res.status(200);
    }

})

module.exports = router;