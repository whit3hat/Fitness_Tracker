const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//variable app referring to the express service
const app = express();
//Port for the application to run
const PORT = process.env.PORT || 3000
var db = require('./models');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
//mongoose connect string, using the localhost 'fitnesstracker'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker', { useNewUrlParser: true });

//Routes
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);


//Validation server is running on correct port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
