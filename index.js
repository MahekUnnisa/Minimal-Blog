const express = require('express');
const app = express()
const PORT = process.env || 3000
const path = require('path')
app.get('/',(req,res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})
