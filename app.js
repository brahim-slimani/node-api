const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./route/router'); 

//request body parser to json
app.use(bodyParser.json());

//include custom router
app.use(router);

//listen requests
app.listen(4000, () => {    
    console.log("server up through port 4000");
});