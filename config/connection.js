var sequelize = require("sequelize");


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

module.exports = sequelize;