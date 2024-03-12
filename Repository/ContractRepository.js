const { Op } = require("sequelize");
const { Contract } = require("../Model/Contract");

class ContractRepository {
  getAll() {
    return Contract.findAll({
      order: [
        ['id', 'DESC']
      ]
    });
  }
  getAllFiltered(payload) {
    return Contract.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            rut: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            rut: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            bill: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            name: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            phone: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            address: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            kindship: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            rutDeceased: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            nameDeceased: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            typeBenefit: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            amountBenefit: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            wakeAddress: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            cementery: {
              [Op.like]: `%${payload}%`,
            },
          },
          {
            price: {
              [Op.like]: `%${payload}%`,
            },
          },
        ],
      },
    });
  }
  findById(id) {
    return Contract.findByPk(id);
  }
  create(payload) {
    try {
      return Contract.create({
        ...payload,
        dateDeceased: new Date(payload.dateDeceased),
      });
    } catch (error) {
      console.log(error);
    }
  }

  update(id, payload) {
    try {
      return Contract.update({ ...payload }, { where: { id } });
    } catch (error) { }
  }

  delete(id) {
    try {
      return Contract.destroy({ where: { id } });
    } catch (error) { }
  }
}

module.exports = new ContractRepository();
