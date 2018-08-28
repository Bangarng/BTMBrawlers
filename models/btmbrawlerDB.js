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


var itemDB =sequelize.define("items",{


    itemName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:
        {
            len: [1,15]
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
    
    lvlUnlock:{
        type: Sequelize.BOOLEAN,
    },
},
{
    freezeTableName: true,
    timestamps: false   
});    


itemDB.sync();
brawlerdb.sync();

module.exports = brawlerdb;
module.exports = itemDB;
