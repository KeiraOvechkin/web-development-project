const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.static('WebPortfolio'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/WebPortfolio/Contact.html')
})

app.listen(PORT, ()=>{
    console.log('Sever running on port ${PORT}')
})

