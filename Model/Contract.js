// Importa Sequelize y el modelo de base de datos correspondiente
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../sequelize"); // Asegúrate de configurar esto correctamente
// Define la clase del modelo
class Contract extends Model { }

// Define el modelo utilizando los campos proporcionados
Contract.init(
  {
    rut: DataTypes.STRING,
    bill: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    kindship: DataTypes.STRING,
    rutDeceased: DataTypes.STRING,
    nameDeceased: DataTypes.STRING,
    dateDeceased: DataTypes.DATE,
    benefitRequest: DataTypes.BOOLEAN,
    typeBenefit: DataTypes.STRING,
    amountBenefit: DataTypes.FLOAT,
    wakeAddress: DataTypes.STRING,
    cementery: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Contract", // Nombre del modelo
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
    paranoid: true
  }
);

// Exporta el modelo
console.log("The table for the Contract model was just (re)created!");

module.exports = { Contract };
