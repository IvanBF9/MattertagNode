const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require("cors");
//Internal Imports
const createRoutes = require("./routes/routes");
//.env
require('dotenv').config();
const env = process.env;

const app = express();
//Use
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
//disable
app.disable('x-powered-by');

//Mongoose
try{
    mongoose.connect(env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
}catch(err){console.log(`Mongoose connect error: ${err}`);};

//Init Route
createRoutes(app);

//Server
app.listen(env.PORT, ()=>{
    console.log(`Server listening on port: ${env.PORT}`);
});