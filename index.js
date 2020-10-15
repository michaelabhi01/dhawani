const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var multer = require('multer');
var upload = multer();

const port = process.env.PORT || 6000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
// app.use(express.static('public'));
require('dotenv').config();

app.all("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

const loginRoutes = require('./api/routes/login');
const informationRoutes = require('./api/routes/information');
const getStateRoutes = require('./api/routes/getState');
const getDistrictRoutes = require('./api/routes/getDistrict');
const getChildProfileRoutes = require('./api/routes/getChildProfile');
const createStateRoutes = require('./api/routes/createState');
const createDistrictRoutes = require('./api/routes/createDistrict');
const createChildProfileRoutes = require('./api/routes/createChildProfile');
const logoutRoutes = require('./api/routes/logout');

app.use('/', informationRoutes);
app.use('/login', loginRoutes);
app.use('/get-state', getStateRoutes);
app.use('/get-district', getDistrictRoutes);
app.use('/get-child-profile', getChildProfileRoutes);

app.use('/create-state', createStateRoutes);
app.use('/create-district', createDistrictRoutes);
app.use('/create-child-profile', createChildProfileRoutes);
app.use('/logout', logoutRoutes);