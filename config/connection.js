var sequelize = require("sequelize");

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

var sequelize = new sequelize("users_db", "root", "samM1994",{

    host: "localhost",
    port: 3306,
    dialect: "mysql",
    
        pool:{
            max: 5,
            min: 0,
            idle: 10000
        }

});
}
module.exports = sequelize;