const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = 3000 || process.env.PORT;
const fetch = require('node-fetch');
const fs = require('fs');


//connect to database
mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });

// Task 1 =>call the promise function
const callPromise = require('./promise');
callPromise();

// Task 2 => call the fetchUrl Details
const fetchUrl = require('./fetchUrl');
fetchUrl();


//Task 3 Product routes
const productRouter = require('./router/product.router');
app.use('/api/v1/product', productRouter);



app.listen(port, () => {
    console.log(`Server started on port:${port}`);
});