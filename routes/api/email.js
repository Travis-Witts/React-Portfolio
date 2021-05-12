const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.post("/", async (req, res) => {
  try {
    if (
      req.body.text.length < 200 &&
      req.body.from.length < 200 &&
      req.body.subject.length < 200
    ) {
      const myOAuth2Client = new OAuth2(process.env.ID, process.env.SECRET);

      myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH,
      });

      const myAccessToken = myOAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EM_USER,
          clientId: process.env.ID,
          clientSecret: process.env.SECRET,
          refreshToken: process.env.REFRESH,
          accessToken: myAccessToken,
        },
      });

      transporter.sendMail({
        from: req.body.from,
        to: "travis.witts@outlook.com",
        subject: req.body.subject,
        text: req.body.text,
      });
      res.status(200).send("worked");
    } else {
      res.status(400);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
