const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

class Payment extends Model { }

Payment.init({
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: "Payment",
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
    paranoid: true
})

console.log("The table for the Payment model was just (re)created!");

module.exports = {Payment}
