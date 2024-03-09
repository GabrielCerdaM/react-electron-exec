const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../sequelize')

class User extends Model { }

User.init(
    {

        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true, // Agrega automáticamente createdAt y updatedAt
        paranoid: true
    }
)

console.log("The table for the User model was just (re)created!");
module.exports = { User }

// Suggest to implement 2 or more models
// https://github.com/rpichioli/react-with-nodejs-and-sequelize/blob/master/server/models/index.js