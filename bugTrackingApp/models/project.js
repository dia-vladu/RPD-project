const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Proiect = sequelize.define(
    "Proiect",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_repo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nume: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        descriere: {
            type: DataTypes.STRING(128),
            allowNull: true
        }
    },
    {
        tableName: "Proiecte"
    }
)

module.exports = Proiect;