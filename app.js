const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
var fs = require('fs');
const path = require('path')
const axios = require('axios');
const { error } = require('console');
const express = require('express')
const auth = require('./middleware/auth');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(`${process.env.PORT}`, ()=>{
    console.log('server listening on 8088');
});


const user = require('./controllers/userController')
app.post('/login',user.login);
app.post('/createUser',auth,user.createUser);
app.get('/getList',auth,user.getUserList);
app.post('/deleteUser',auth,user.deleteUser);
app.post('/addPrivileges',auth,user.addPrivileges);
app.post('/removePrivileges',auth,user.removePrivileges);
app.post('/addAliases',auth,user.addAliases);
app.post('/removeAliases',auth,user.removeAliases);

