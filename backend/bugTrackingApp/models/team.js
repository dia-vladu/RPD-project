const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Echipa = sequelize.define(
    "Echipa",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nume: {
            type: DataTypes.STRING(32)
        }
    },
    {
        tableName: "Echipe"
    }
)

module.exports = Echipa;