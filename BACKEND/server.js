const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB 
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application
require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT =process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {


});

const connection = mongoose.connection; // MongoDB Connection
connection.once ("open", ()=>{

    console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
})


const add_employee = require("./routes/add_employee.js");

//http://localhost:8070/Employee 

app.use("/Employee",add_employee);



app.listen(PORT,()=>{

    console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
})