const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Bug = sequelize.define(
    "Bug",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        severitate: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['1', '2', '3']
        },
        prioritate: {
            //Default??
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['1', '2', '3'] //1 = cea mai urgenta
        },
        link_commit: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate:{
                isUrl: true, // Aparent accespta si http... si https...
                isUrl: {
                    msg: "The link in is invalid!"
                }
            }
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Rezolvat', 'Nerezolvat', 'In proces']
        },
        id_MP: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        descriere: {
            type: DataTypes.STRING(256),
            allowNull: true
        }
    },
    {
        tableName: "Buguri"
    }
)

module.exports = Bug;
