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
        name: {
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