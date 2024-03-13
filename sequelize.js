const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
config();
// Option 1: Passing a connection URI
// how .exe app affect with config?

const sequelize = new Sequelize("electron", "root", "funerarialasrosas9!", {
  host: "127.0.0.1",
  dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  dialectOptions: {
    timezone: 'America/Santiago',
  },
  timezone: 'America/Santiago',
});

const testConnection = async () => {
  try {
    const resp = await sequelize.authenticate();
    console.log("Connection has been established successfully.", resp);
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  sequelize.close();
  return false;
};
module.exports = { sequelize, testConnection };
