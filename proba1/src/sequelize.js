const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: "./sqlite/bugApp.db"
    }
);

sequelize.sync().then( () => {
        console.log("All models were synced.");
    }
);

module.exports = sequelize;