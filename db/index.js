const { Contract } = require("../Model/Contract");
const { Payment } = require("../Model/Payment");
const { Document } = require("../Model/Document");
const { User } = require("../Model/User");
const { sequelize } = require("../sequelize");

async function syncDataBase() {
    try {
        Document.belongsTo(Contract);
        Payment.belongsTo(Contract);
        Contract.hasMany(Document);
        Contract.hasMany(Payment);
        await sequelize.sync({ force: true }); // El uso de force: true eliminará las tablas existentes (ten cuidado en producción)



        console.log('Base de datos sincronizada correctamente.');
    } catch (error) {
        console.log('Error syncing database', error);
    }
}

async function insertData() {
    try {
        const newUser = await User.create({
            email: "email@email.cl"
        });

        const array = [
            {
                rut: '19.412.216-0',
                name: 'Nombre de prueba',
                phone: '999999999',
                address: 'direccion falsa',
                email: 'correo@email.cl',
                kindship: 'parentezco',
                rutDeceased: '1111111-1',
                nameDeceased: 'nombre',
                dateDeceased: '1990-12-12',
                typeBenefit: 'AFP',
                amountBenefit: 999999,
                wakeAddress: 'Direccion falsa',
                cementery: 'Direccion falsa',
            }, {
                rut: '19.412.216-0',
                name: 'Nombre de prueba',
                phone: '999999999',
                address: 'direccion falsa',
                email: 'correo@email.cl',
                kindship: 'parentezco',
                rutDeceased: '1111111-1',
                nameDeceased: 'nombre',
                dateDeceased: '1990-12-12',
                typeBenefit: 'AFP',
                amountBenefit: 999999,
                wakeAddress: 'Direccion falsa',
                cementery: 'Direccion falsa',
            }, {
                rut: '19.412.216-0',
                name: 'Nombre de prueba',
                phone: '999999999',
                address: 'direccion falsa',
                email: 'correo@email.cl',
                kindship: 'parentezco',
                rutDeceased: '1111111-1',
                nameDeceased: 'nombre',
                dateDeceased: '1990-12-12',
                typeBenefit: 'AFP',
                amountBenefit: 999999,
                wakeAddress: 'Direccion falsa',
                cementery: 'Direccion falsa',
            }
        ]
        array.forEach(async element => {
            const newContract = await Contract.create(element);
            console.log({ newContract });
        });
        console.log({ newUser });
        console.log('insertData');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { syncDataBase, insertData }   