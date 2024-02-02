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
        modelName:'User',
        timestamps:false
    }
)

console.log("The table for the User model was just (re)created!");
module.exports = { User }