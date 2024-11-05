const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;


app.use(express.static('WebPortfolio'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/WebPortfolio/Contact.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'keiraxps2@gmail.com',
            pass: 'Riley2004'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'keiraxps2@gmail.com',
        message: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})



app.listen(PORT, ()=>{
    console.log('Sever running on port ${PORT}')
})

