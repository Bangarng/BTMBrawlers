var Sequelize = require("sequelize");
var sequelize = require("../config/connection");
    

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

    charName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:
        {
            len: [1, 50]
        }
    }
},
{
    freezeTableName: true,
    timestamps: false   
});    


itemDB.sync();

module.exports = itemDB;