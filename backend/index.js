const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const userRoute = require('./routes/user.routes.js');
const expenseRoute = require('./routes/expense.routes.js')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully');
    })
    .catch(error => console.log(error));

app.use('/user', userRoute);  // Ensure user routes are properly mounted
app.use('/api', expenseRoute)

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
