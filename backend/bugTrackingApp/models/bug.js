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
            allowNull: false
            //De pastrat + protocols []
            // validate:{
            //     isUrl: true,
            //     isUrl: {
            //         msg: "The commit link must have the format: https://..."
            //     }
            // }
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Rezolvat', 'Nerezolvat', 'In proces']
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
