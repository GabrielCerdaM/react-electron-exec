const { Document } = require("../Model/Document");

class DocumentRepository {
  async getAll() {
    return await Document.findAll();
  }
  async findByContractId(id) {
    return await Document.findAll({
      where: {
        ContractId: id
      },
    })
  }

  async create(payload) {
    return await Document.create(payload);
  }
}

module.exports = new DocumentRepository();
