const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
//.env
require('dotenv').config();
const env = process.env;
//Routes
const createRoutes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Mongoose
mongoose.connect(env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

//Init Route
createRoutes(app);

//Server
app.listen(env.PORT, ()=>{
    console.log(`Server listening on port: ${env.PORT}`);
});