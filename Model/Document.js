const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

class Document extends Model { }

Document.init({

    path: DataTypes.STRING,
    ext: DataTypes.STRING,
}, {
    sequelize,
    modelName: "Document",
    timestamps: false
})

console.log("The table for the Contract Document was just (re)created!");


module.exports = {Document }