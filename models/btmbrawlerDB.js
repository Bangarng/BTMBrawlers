var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var brawlerdb = sequelize.define("userInfo", //this is the table stupid <3 <3// 
{
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,50]
        }
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,50]
        }
    },
    charName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,30]
        }
    },
    attack:{
        type: Sequelize.INTEGER,
    },
    defense:{
        type: Sequelize.INTEGER,
    },
    intellect:{
        type: Sequelize.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: false   
});



module.exports = brawlerdb;
