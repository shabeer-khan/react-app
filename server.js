"use strict"
const express = require('express');
const path = require('path');
const upload = require("express-fileupload");

const routes = require('./routes/approutes');

const app = express();
app.set('port', process.env.PORT || 3000);
const staticFilesPath = path.join(__dirname, "dist");
const staticFilesMiddleWare = express.static(staticFilesPath);

app.use(staticFilesMiddleWare);
app.use(upload());
app.use("/", routes);

app.listen(app.get('port'), () => {
	console.log(`App started on port ${app.get('port')}`);
});


