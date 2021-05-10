const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EM_USER,
            pass: process.env.EM_PASS
        }
    });

    console.log('created');
    transporter.sendMail({
        from: req.body.from,
        to: 'travis.witts@outlook.com',
        subject: req.body.subject,
        text: req.body.text
    });
    res.send("worked")
})

module.exports = router;