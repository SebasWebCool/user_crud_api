const express = require('express');

const userRouter = require('./users/users.router').router;

//* Imports
const { db } = require('./utils/database');
const config = require('./config');

//? Init express app
const app = express();

app.use(express.json());
//? Enable incoming form-urlencoded data
app.use(express.urlencoded({ extended: false }));

//? Database Configs
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err));
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

//? Routes V1

app.get('/', (req, res) => {
    res.status(200).json({ message: 'All ok!' });
});
app.use('/api/v1/users', userRouter);

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});

module.exports = app;
