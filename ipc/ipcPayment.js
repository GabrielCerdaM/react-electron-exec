const { ipcMain } = require("electron");
const PaymentService = require('../Services/PaymentService');

function ipcPayment() {
  // const handleGetAll = async () => {
  //   return await PaymentService.getAll();
  // };

  // const handleGetAllFiltered = async (payload) => {
  //   return await PaymentService.getAllFiltered(payload);
  // };

  // const handleFind = async (payload) => {
  //   console.log("handleFind", { payload });
  //   return await PaymentService.getAll();
  // };

  // const handleFindById = async (id) => {
  //   return await PaymentService.findById(id);
  // };

  const handleFindByContractId = async (contractId) => {
    try {
      const resp = await PaymentService.getByContractId(contractId);
      console.log({ resp });
      if (!resp) {
        throw new Error('Error al obtener pagos');
      }
      const payments = resp.map(payment => payment.dataValues)
      console.log({ payments });
      return payments;
    } catch (error) {
      console.log({ error });
    }
  }

  const handleCreate = async (contractId, payload) => {
    // return await PaymentService.create(payload);
    console.log('ipc',{contractId,payload});
    return await PaymentService.create(contractId, payload)
  };
  const handleUpdate = async ({ id, payload }) => {
    return await PaymentService.update(id, payload);
  };
  const handleDelete = async (id) => {
    const response = await PaymentService.delete(id);
    console.log({ response });
    return id;
    // return await PaymentService.delete(id);
  };

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // In the main process
  ipcMain.handle("payment-operation", async (event, data) => {
    const { action, payload, id } = data;
    // console.log({ payload, id });
    let result;
    switch (action) {
      case "add":
        result = await handleCreate(id, payload)
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
