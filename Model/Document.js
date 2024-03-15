const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

class Document extends Model {}

Document.init(
  {
    path: DataTypes.STRING,
    name: DataTypes.STRING,
    ext: DataTypes.STRING,
    ContractId: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Document",
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
    paranoid: true
  }
);

console.log("The table for the Contract Document was just (re)created!");

module.exports = { Document };
