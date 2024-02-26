const { Contract } = require("../Model/Contract");
const { Payment } = require("../Model/Payment");
const { Document } = require("../Model/Document");
const { User } = require("../Model/User");
const { sequelize } = require("../sequelize");

async function syncDataBase() {
  try {
    Document.belongsTo(Contract);
    Payment.belongsTo(Contract);
    Contract.hasMany(Document, { as: "documents" });
    Contract.hasMany(Payment);

    await sequelize.sync({ force: true }); // El uso de force: true eliminará las tablas existentes (ten cuidado en producción)

    console.log("Base de datos sincronizada correctamente.");
  } catch (error) {
    console.log("Error syncing database", error);
  }
}

async function insertData() {
  try {
    const newUser = await User.create({
      email: "email@email.cl",
    });

    const contracts = [
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba asdasd",
        phone: "999999999",
        address: "direccion falsa",
        email: "correo@email.cl",
        kindship: "parentezco",
        rutDeceased: "1111111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 999999,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 1000,
        bill: 100,
      },
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba dddddd",
        phone: "999999999",
        address: "direccion falsa",
        email: "correo@email.cl",
        kindship: "parentezco",
        rutDeceased: "1111111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 999999,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 1000,
        bill: 100,
      },
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba vvvvv",
        phone: "999999999",
        address: "direccion falsa",
        email: "correo@email.cl",
        kindship: "parentezco",
        rutDeceased: "1111111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 999999,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 1000,
        bill: 100,
      },
    ];

    const payments = [
      {
        "type": "Debito",
        amount: 10000,
        ContractId: 1
      },
      {
        "type": "Credito",
        amount: 10000,
        ContractId: 1
      },
      {
        "type": "Efectivo",
        amount: 10000,
        ContractId: 1
      },
      {
        "type": "Transferencia",
        amount: 10000,
        ContractId: 1
      }
    ]
    const documents = [];

    contracts.forEach(async (element) => {
      try {
        const newContract = await Contract.create(element, {});
      } catch (error) {
        console.log("insert", { error });
      }
    });

    documents.forEach(async (doc, index) => {
      try {
        console.log({ doc });
        const newDoc = await Document.create(doc);
        console.log({ newDoc });
      } catch (error) {
        console.log({ error });
      }
    });

    payments.forEach(async (payment, index) => {
      try {
        await Payment.create(payment, { include: Contract });
      } catch (error) {
        console.log({ error });
      }
    })

    console.log({ newUser });
    console.log("insertData");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { syncDataBase, insertData };
