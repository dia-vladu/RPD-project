const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

const Student = sequelize.define(
    "Student",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        nume: {
            type: DataTypes.STRING
        },
        prenume: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.ENUM,
            values: ['TESTER', 'DEVELOPER']
        }
    },
    {
        tableName: "Students"
    }
);

module.exports = Student;