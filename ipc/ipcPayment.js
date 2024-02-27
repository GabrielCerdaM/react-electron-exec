const { ipcMain } = require("electron");
const PaymentService = require('../Services/PaymentService');

function ipcPayment() {
  const handleGetAll = async () => {
    // return await ContractService.getAll();
  };

  const handleGetAllFiltered = async (payload) => {
    return await ContractService.getAllFiltered(payload);
  };

  const handleFind = async (payload) => {
    console.log("handleFind", { payload });
    return await ContractService.getAll();
  };

  const handleFindById = async (id) => {
    return await ContractService.findById(id);
  };

  const handleFindByContractId = async (contractId) => {
    try {
      const resp = await PaymentService.getByContractId(contractId);
      console.log({ resp });
      if (!resp) {
        throw new Error('Error al obtener pagos');
      }
      const payments = resp.map(payment => payment.dataValues)
      console.log({payments});
      return payments;
    } catch (error) {
      console.log({ error });
    }
  }

  const handleCreate = async (contractId, payload) => {
    // return await ContractService.create(payload);
    return await PaymentService.create(contractId, payload)
  };
  const handleUpdate = async ({ id, payload }) => {
    return await ContractService.update(id, payload);
  };
  const handleDelete = async (id) => {
    const response = await PaymentService.delete(id);
    console.log({ response });
    return id;
    // return await ContractService.delete(id);
  };

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // In the main process
  ipcMain.handle("payment-operation", async (event, data) => {
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "add":
        result = handleCreate(id, payload)
        break;
      case "findByContractId":
        result = await handleFindByContractId(id);
        break;
      case "delete":
        result = handleDelete(id);
        break;
      default:
        console.error("Invalid action:", action);
        return event.reply("crud-operation-reply", {
          success: false,
          error: "Invalid action",
        });
    }
    return result;
  });
}
module.exports = { ipcPayment };
