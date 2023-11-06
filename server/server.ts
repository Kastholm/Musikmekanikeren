// intialiser Express.js
const express = require('express');
const app = express();
// indhent Nodemailer
const nodemailer = require('nodemailer');
// Indhent email bruger fra .env fil
require('dotenv').config();
const cors = require('cors');
// JSON parser
app.use(express.json());
app.use(cors());
// Lav api end points
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'Christiansen95@live.dk',
            pass: '' //Pass skal indsættes for at det virker!!
        }
    });


    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Dette vil sende e-mailen til dig
        subject: 'Ny besked fra Musikmekanikeren.dk',
        text: `
        

Navn: ${req.body.name},


Email: ${req.body.email},


Tlf: ${req.body.phone},



Besked: 

${req.body.text}
     `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Opstået en fejl, kontakt: kaare@musikmekanikeren.dk ,  602 17 602');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Din Email er blevet sendt!');
        }
    });
});
// Start Express server
const PORT = 10001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});