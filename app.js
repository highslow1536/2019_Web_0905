import * as mysqlConfig from './config/mysql';
const express = require('express');
var cors = require('cors');
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConfig.mysqlConfig);
const port = 3003;

connection.connect();
fwaljwakfjwalkjklawfj
connection.query('select * from test', function(err, rows, fields) {
    if (!err) {
        console.log('Success ', rows)
    } else {
        console.log('err ',err)
    }
})
app.use(express.json());
app.use(cors());

app.use(express.static('public'));
connection.end();

app.listen(port, () => {
    console.log("Server "+port+"is start....");
})