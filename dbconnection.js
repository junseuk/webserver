var mysql = require('mysql');
var dbPool = mysql.createPool(dbConfig);
module.exports = dbPool;