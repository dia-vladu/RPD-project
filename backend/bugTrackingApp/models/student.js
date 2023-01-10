const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Student = sequelize.define(
    "Student",
    {
        id: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                len: [4, 16],
                len: {
                    msg: "Parola introdusa trebuie sa aiba intre 4 si 16 caractere!"
                },
                notEmpty: true, //don't allow empty strings
                notEmpty: {
                    msg: "Trebuie sa introduceti o parola!"
                }
            }
        },
        nume: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        prenume: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true, //checks for email format
                isEmail: {
                    msg: "Formatul acceptat este de email! ex: foo@bar.com"
                }
            }
        },
        tip_user: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['MP', 'TST']
        },
        gen: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['F', 'M']
        },
        data_nasterii: {
            type: DataTypes.DATEONLY, //default format: YYYY/MM/DD
            allowNull: true,
            validate: {
                isDate: true //only allow date strings
            // },
            //nu-i place fct asta => se panicheaza si da eroare 500 daca incercsa apelez getStudents
            // get: function () { //format: DD/MM/YYYY
            //     return this.getDataValue('data_nasterii').toLocaleString('en-GB', { timeZone: 'UTC' });
            // }
            }
        },
        facultate: {
            type: DataTypes.STRING(64),
            allowNull: true //allows null values
        }
    },
    {
        tableName: "Studenti"
    }
)

module.exports = Student;