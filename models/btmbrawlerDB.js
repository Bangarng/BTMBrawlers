var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var db = sequelize.define("userInfo", 
{
    userName: 
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate:
        {
            len: [1,50]
        }
    },
    charName:
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate:
        {
            len: [1,30]
        }
    },
    attack:
    {
        type: Sequelize.INTEGER,
    },
    defense:
    {
        type: Sequelize.INTEGER,
    },
    intellect:
    {
        type: Sequelize.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: false   
});


var itemDB =sequelize.define("items",{


    itemName:
        {
            type: Sequelize.STRING,
            allowNull: false,
            validate:
            {
                len: [1,15]
            }
        },
    attack:
    {
        type: Sequelize.INTEGER,
    },
    defense:
    {
        type: Sequelize.INTEGER,
    },
    intellect:
    {
        type: Sequelize.INTEGER,
    },
    
    lvlUnlock:
    {
        type: Sequelize.BOOLEAN,
    },
},
{
    freezeTableName: true,
    timestamps: false   
});    


itemDB.sync();
db.sync();

module.exports = db;
module.exports = itemDB;