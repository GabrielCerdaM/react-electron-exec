const { Contract } = require("../Model/Contract");

class ContractRepository {
  getAll() {
    return Contract.findAll();
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
    } catch (error) {}
  }

  delete(id) {
    try {
      return Contract.destroy({ where: { id } });
    } catch (error) {}
  }
}

module.exports = new ContractRepository();
