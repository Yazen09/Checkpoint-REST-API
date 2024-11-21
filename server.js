const express=require('express');
const app =express();

app.use(express.json());



require('dotenv').config();




PORT=process.env.PORT;

const connectDBs=require("./config/connectDB")
connectDBs();

app.use('/api/user', require('./Routes/User'))

app.listen(PORT, (err) => {
    err ? console.log('Failed to connect') :
    console.log(`Server running at ${PORT}`);
});


