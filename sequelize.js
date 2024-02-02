require('dotenv').config()
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// how .exe app affect with config?

const sequelize = new Sequelize('electron', 'root', 'mysqldb', {
    host: 'localhost',
    dialect: "mysql"/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const testConnection = async () => {
    try {
        const resp = await sequelize.authenticate();
        console.log('Connection has been established successfully.', resp);
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    sequelize.close();
    return false;
}

(async () => {
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
})()

module.exports = { sequelize, testConnection }