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
    await User.create({
      email: "usuario@gmail.cl",
      password: "1234",
    });

    await User.create({
      email: "frosas@gmail.cl",
      password: "1234",
    });

    const contracts = [
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba asdasd",
        phone: "999999999",
        address: "direccion falsa",
        email: "usuario@gmail.com",
        kindship: "parentezco",
        rutDeceased: "1.111.111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 550000,
        benefitRequest: true,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 950000,
        bill: 100,
      },
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba dddddd",
        phone: "999999999",
        address: "direccion falsa",
        email: "usuario2@gmail.com",
        kindship: "parentezco",
        rutDeceased: "1.111.111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 550000,
        benefitRequest: false,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 1600000,
        bill: 100,
      },
      {
        rut: "19.412.216-0",
        name: "Nombre de prueba vvvvv",
        phone: "999999999",
        address: "direccion falsa",
        email: "frosas@gmail.com",
        kindship: "parentezco",
        rutDeceased: "1.111.111-1",
        nameDeceased: "nombre",
        dateDeceased: "1990-12-12",
        typeBenefit: "AFP",
        amountBenefit: 550000,
        benefitRequest: false,
        wakeAddress: "Direccion falsa",
        cementery: "Direccion falsa",
        price: 2000000,
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
      },
      {
        "type": "Debito",
        amount: 10000,
        ContractId: 1
      },
      {
        "type": "Credito",
        amount: 10000,
        ContractId: 2
      },
      {
        "type": "Efectivo",
        amount: 10000,
        ContractId: 2
      },
      {
        "type": "Transferencia",
        amount: 10000,
        ContractId: 3
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
