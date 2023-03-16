require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
require('./db');

const mainRouter = require('./routes/mainRouter');

app.use(cors());
app.use(express.json());
app.use('/', mainRouter);

PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});