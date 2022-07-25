'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyparser = require("body-parser")
const fileRoutes = require("./routes/file-upload-routes")

const app = express();

app.use(express.static('public')); 
app.use('/uploads', express.static('uploads'));

require('./database')();

app.use(cors());
app.use(bodyparser.json());
app.use('./uploads',express.static(path.join(__dirname,'uploads')));

app.use('/api',fileRoutes.routes);
app.listen(3000, ()=> console.log("started"))